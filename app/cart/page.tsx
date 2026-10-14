"use client";

import Link from "next/link";
import SiteHeader from "@/components/layout/site-header";
import { formatRupees, useStore } from "@/components/store/store-provider";

export default function CartPage() {
  const { cart, setQuantity, hydrated } = useStore();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = subtotal === 0 || subtotal >= 1200 ? 0 : 49;
  const total = subtotal + delivery;

  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-[#fffdf8] text-[#302923]">
        <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <div className="mb-6 flex items-center justify-between gap-3">
            <div>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#648064]">Your basket</p>
              <h1 className="text-3xl font-bold tracking-[-0.05em] sm:text-4xl">Ready for checkout.</h1>
            </div>
            <Link className="text-sm font-bold text-[#c83226] hover:text-[#a9251d]" href="/menu">Keep shopping</Link>
          </div>

          {!hydrated ? (
            <p className="py-8 text-sm text-[#756b60]">Loading your basket…</p>
          ) : cart.length === 0 ? (
            <div className="rounded-[1.8rem] border border-[#eee8dc] bg-white p-8 text-center">
              <h2 className="text-xl font-bold">Your cart is empty.</h2>
              <p className="mt-2 text-sm text-[#756b60]">Add a pizza, side, or drink to get started.</p>
              <Link className="mt-5 inline-flex min-h-11 items-center rounded-full bg-[#c83226] px-5 text-sm font-bold text-white" href="/menu">Browse the menu</Link>
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-4 rounded-[1.8rem] border border-[#eee8dc] bg-white p-4 shadow-[0_8px_24px_rgba(52,41,31,0.04)] sm:p-5">
                {cart.map((item) => (
                  <div className="flex flex-col gap-4 rounded-2xl border border-[#f2ece0] bg-[#faf7f0] p-4 sm:flex-row sm:items-center sm:justify-between" key={item.id}>
                    <div>
                      <h2 className="text-lg font-bold">{item.name}</h2>
                      <p className="mt-1 text-sm text-[#756b60]">{item.detail} · {formatRupees(item.price)} each</p>
                    </div>
                    <div className="flex items-center justify-between gap-3 sm:gap-5">
                      <div className="inline-flex items-center gap-3 rounded-full border border-[#e7dfd2] bg-white px-2 py-1.5">
                        <button aria-label={`Remove one ${item.name}`} className="flex h-8 w-8 items-center justify-center text-lg text-[#51483f]" onClick={() => setQuantity(item.id, item.quantity - 1)} type="button">−</button>
                        <span aria-live="polite" className="min-w-5 text-center text-sm font-bold">{item.quantity}</span>
                        <button aria-label={`Add one ${item.name}`} className="flex h-8 w-8 items-center justify-center text-lg text-[#51483f]" onClick={() => setQuantity(item.id, item.quantity + 1)} type="button">+</button>
                      </div>
                      <span className="min-w-[90px] text-right text-lg font-extrabold">{formatRupees(item.price * item.quantity)}</span>
                    </div>
                  </div>
                ))}
              </div>

              <aside className="rounded-[1.8rem] border border-[#eee8dc] bg-[#faf7f0] p-5 sm:p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#648064]">Summary</p>
                <div className="mt-5 space-y-3 text-sm text-[#51483f]">
                  <div className="flex justify-between"><span>Subtotal</span><span className="font-bold text-[#302923]">{formatRupees(subtotal)}</span></div>
                  <div className="flex justify-between"><span>Delivery</span><span className="font-bold text-[#302923]">{delivery ? formatRupees(delivery) : "Free"}</span></div>
                  <div className="flex justify-between"><span>Taxes</span><span className="font-bold text-[#302923]">₹0</span></div>
                </div>
                <div className="mt-5 border-t border-[#efe5d7] pt-4">
                  <div className="flex justify-between text-lg font-extrabold"><span>Total</span><span>{formatRupees(total)}</span></div>
                </div>
                <Link className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#c83226] px-6 text-sm font-bold text-white transition hover:bg-[#a9251d]" href="/checkout">Proceed to checkout</Link>
                <div className="mt-4 rounded-2xl border border-[#e7dfd2] bg-white p-3 text-sm text-[#756b60]">
                  {delivery === 0 ? "Free delivery applied." : `Add ${formatRupees(1200 - subtotal)} for free delivery on orders above ₹1,200.`}
                </div>
              </aside>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
