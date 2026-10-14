"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const CART_STORAGE_KEY = "da-pizza-garden-cart";
const ORDERS_STORAGE_KEY = "da-pizza-garden-orders";

export type CartItem = {
  id: string;
  name: string;
  detail: string;
  price: number;
  quantity: number;
};

export type StoreOrder = {
  id: string;
  token: string;
  items: CartItem[];
  customerName: string;
  phone: string;
  address: string;
  deliveryWindow: string;
  paymentMethod: string;
  status: "Preparing";
  eta: string;
  total: number;
};

type NewOrder = Pick<StoreOrder, "customerName" | "phone" | "address" | "deliveryWindow" | "paymentMethod">;

type StoreContextValue = {
  cart: CartItem[];
  orders: StoreOrder[];
  hydrated: boolean;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  setQuantity: (id: string, quantity: number) => void;
  placeOrder: (details: NewOrder) => StoreOrder | null;
};

const StoreContext = createContext<StoreContextValue | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<StoreOrder[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      try {
        const savedCart = localStorage.getItem(CART_STORAGE_KEY);
        const savedOrders = localStorage.getItem(ORDERS_STORAGE_KEY);
        if (savedCart) setCart(JSON.parse(savedCart) as CartItem[]);
        if (savedOrders) setOrders(JSON.parse(savedOrders) as StoreOrder[]);
      } catch {
        try {
          localStorage.removeItem(CART_STORAGE_KEY);
          localStorage.removeItem(ORDERS_STORAGE_KEY);
        } catch {
          // Storage can be unavailable in restricted browser contexts.
        }
      } finally {
        setHydrated(true);
      }
    }, 0);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart, hydrated]);

  useEffect(() => {
    if (hydrated) localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
  }, [orders, hydrated]);

  const addItem = useCallback((item: Omit<CartItem, "quantity">) => {
    setCart((current) => {
      const existing = current.find((cartItem) => cartItem.id === item.id);
      return existing
        ? current.map((cartItem) => cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem)
        : [...current, { ...item, quantity: 1 }];
    });
  }, []);

  const setQuantity = useCallback((id: string, quantity: number) => {
    setCart((current) => quantity <= 0
      ? current.filter((item) => item.id !== id)
      : current.map((item) => item.id === id ? { ...item, quantity } : item));
  }, []);

  const placeOrder = useCallback((details: NewOrder) => {
    if (cart.length === 0) return null;
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const total = subtotal + (subtotal >= 1200 ? 0 : 49);
    const order: StoreOrder = {
      ...details,
      id: `DPG-${Math.floor(1000 + Math.random() * 9000)}`,
      token: crypto.randomUUID(),
      items: cart.map((item) => ({ ...item })),
      status: "Preparing",
      eta: "20 mins",
      total,
    };
    setOrders((current) => [order, ...current]);
    setCart([]);
    return order;
  }, [cart]);

  const value = useMemo(() => ({ cart, orders, hydrated, addItem, setQuantity, placeOrder }),
    [cart, orders, hydrated, addItem, setQuantity, placeOrder]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used inside StoreProvider");
  return context;
}

export function formatRupees(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}
