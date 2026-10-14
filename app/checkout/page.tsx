"use client";

import type { FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SiteHeader from "@/components/layout/site-header";
import { formatRupees, useStore } from "@/components/store/store-provider";

const inputClass = "min-h-12 w-full rounded-2xl border border-[#eee8dc] bg-[#faf7f0] px-4 text-sm text-[#302923] outline-none placeholder:text-[#8b8074] focus:border-[#c83226]";

export default function CheckoutPage() {
  const { cart, hydrated, placeOrder } = useStore();
  const router = useRouter();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = subtotal >= 1200 ? 0 : 49;
  const total = subtotal + delivery;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const order = placeOrder({
      customerName: String(data.get("name") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      address: [data.get("address"), data.get("apartment")].filter(Boolean).join(", "),
      deliveryWindow: String(data.get("delivery-window") ?? "As soon as possible"),
      paymentMethod: String(data.get("payment") ?? "Cash on delivery"),
    });
    if (order) router.push(`/orders/access/${order.token}`);
  }

  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-[#fffdf8] text-[#302923]">
        <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <div className="mb-6">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#648064]">Final step</p>
            <h1 className="text-3xl font-bold tracking-[-0.05em] sm:text-4xl">Check out and enjoy.</h1>
          </div>

          {!hydrated ? (
            <p className="py-8 text-sm text-[#756b60]">Loading your order…</p>
          ) : cart.length === 0 ? (
            <div className="rounded-[1.8rem] border border-[#eee8dc] bg-white p-8 text-center">
              <h2 className="text-xl font-bold">Your cart is empty.</h2>
              <Link className="mt-5 inline-flex min-h-11 items-center rounded-full bg-[#c83226] px-5 text-sm font-bold text-white" href="/menu">Browse the menu</Link>
            </div>
          ) : (
            <form className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]" onSubmit={handleSubmit}>
              <div className="space-y-5 rounded-[1.8rem] border border-[#eee8dc] bg-white p-5 shadow-[0_8px_24px_rgba(52,41,31,0.04)] sm:p-6">
                <div>
                  <label className="mb-2 block text-sm font-bold text-[#51483f]" htmlFor="name">Full name</label>
                  <input className={inputClass} autoComplete="name" id="name" name="name" placeholder="Full name" required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="phone">Phone number</label>
                    <input className={inputClass} autoComplete="tel" id="phone" name="phone" placeholder="Phone number" required type="tel" />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="apartment">Apartment or suite</label>
                    <input className={inputClass} autoComplete="address-line2" id="apartment" name="apartment" placeholder="Apartment / suite (optional)" />
                  </div>
                </div>
                <div>
                  <label className="sr-only" htmlFor="address">Street address</label>
                  <textarea className={`${inputClass} min-h-[110px] py-3`} autoComplete="street-address" id="address" name="address" placeholder="Street address" required />
                </div>

                <fieldset>
                  <legend className="mb-3 text-sm font-bold text-[#51483f]">Delivery window</legend>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {["As soon as possible", "Today · 6:30 PM", "Today · 7:15 PM"].map((window, index) => (
                      <label className="flex cursor-pointer items-center gap-2 rounded-2xl border border-[#eee8dc] bg-[#faf7f0] px-3 py-3 text-sm text-[#51483f]" key={window}>
                        <input defaultChecked={index === 0} name="delivery-window" type="radio" value={window} />
                        <span>{window}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="mb-3 text-sm font-bold text-[#51483f]">Payment method</legend>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {["UPI", "Card", "Cash on delivery", "Wallet"].map((method, index) => (
                      <label className="flex cursor-pointer items-center gap-2 rounded-2xl border border-[#eee8dc] bg-[#faf7f0] px-3 py-3 text-sm text-[#51483f]" key={method}>
                        <input defaultChecked={index === 2} name="payment" type="radio" value={method} />
                        <span>{method}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>

              <aside className="rounded-[1.8rem] border border-[#eee8dc] bg-[#faf7f0] p-5 sm:p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#648064]">Order summary</p>
                <div className="mt-5 space-y-3">
                  {cart.map((item) => (
                    <div className="flex items-center justify-between gap-4 text-sm text-[#51483f]" key={item.id}>
                      <span>{item.name} <span className="text-[#8b8074]">×{item.quantity}</span></span>
                      <span className="font-bold text-[#302923]">{formatRupees(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 space-y-3 border-t border-[#efe5d7] pt-4 text-sm text-[#51483f]">
                  <div className="flex justify-between"><span>Subtotal</span><span className="font-bold text-[#302923]">{formatRupees(subtotal)}</span></div>
                  <div className="flex justify-between"><span>Delivery</span><span className="font-bold text-[#302923]">{delivery ? formatRupees(delivery) : "Free"}</span></div>
                </div>
                <div className="mt-5 flex justify-between border-t border-[#efe5d7] pt-4 text-lg font-extrabold"><span>Total</span><span>{formatRupees(total)}</span></div>
                <button className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#c83226] px-6 text-sm font-bold text-white transition hover:bg-[#a9251d]" type="submit">
                  Place order · {formatRupees(total)}
                </button>
                <p className="mt-3 text-xs leading-5 text-[#756b60]">Demo checkout saves the order in this browser. No payment is processed.</p>
                <Link className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#e7dfd2] px-6 text-sm font-bold text-[#51483f] transition hover:border-[#c83226] hover:text-[#c83226]" href="/cart">Back to cart</Link>
              </aside>
            </form>
          )}
        </section>
      </main>
    </>
  );
}
