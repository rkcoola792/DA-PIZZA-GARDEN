"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import SiteHeader from "@/components/layout/site-header";
import { formatRupees, useStore } from "@/components/store/store-provider";

export default function OrdersPage() {
  const { orders, hydrated } = useStore();
  const [orderId, setOrderId] = useState("");
  const [searchedId, setSearchedId] = useState("");
  const trackedOrder = orders.find((order) => order.id.toLowerCase() === searchedId.toLowerCase());

  function handleTrack(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearchedId(orderId.trim());
  }

  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-[#fffdf8] text-[#302923]">
        <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <div className="rounded-[2rem] border border-[#eee8dc] bg-[radial-gradient(circle_at_top_left,_rgba(100,128,100,0.10),_transparent_32%),linear-gradient(135deg,#fffdf8,#f7f1e7)] p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#648064]">Track your order</p>
                <h1 className="text-3xl font-bold tracking-[-0.05em] sm:text-4xl">Order updates for your pizza.</h1>
              </div>
              <form className="flex w-full max-w-md flex-col gap-3 rounded-2xl border border-[#e7dfd2] bg-white p-3 sm:flex-row" onSubmit={handleTrack}>
                <label className="sr-only" htmlFor="order-id">Order ID</label>
                <input
                  className="min-h-12 flex-1 rounded-full border border-[#eee8dc] bg-[#faf7f0] px-4 text-sm text-[#302923] outline-none placeholder:text-[#8b8074] focus:border-[#c83226]"
                  id="order-id"
                  onChange={(event) => setOrderId(event.target.value)}
                  placeholder="Enter order ID (e.g. DPG-1234)"
                  value={orderId}
                />
                <button className="min-h-12 rounded-full bg-[#c83226] px-5 text-sm font-bold text-white transition hover:bg-[#a9251d]" type="submit">Track</button>
              </form>
            </div>
          </div>
        </section>

        {searchedId && (
          <section aria-live="polite" className="mx-auto w-full max-w-6xl px-4 pb-8 sm:px-6 lg:px-8">
            {trackedOrder ? (
              <article className="rounded-[1.6rem] border border-[#eee8dc] bg-white p-5 shadow-[0_8px_24px_rgba(52,41,31,0.04)]">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#648064]">Order {trackedOrder.id}</p><h2 className="mt-1 text-xl font-bold">{trackedOrder.items.map((item) => `${item.name} ×${item.quantity}`).join(" · ")}</h2></div>
                  <span className="inline-flex w-fit rounded-full bg-[#fdf1d5] px-3 py-1.5 text-xs font-bold text-[#9f6d14]">{trackedOrder.status}</span>
                </div>
                <div className="mt-5 grid gap-4 border-t border-[#f2ece0] pt-4 sm:grid-cols-3">
                  <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8b8074]">ETA</p><p className="mt-1 text-lg font-extrabold">{trackedOrder.eta}</p></div>
                  <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8b8074]">Total</p><p className="mt-1 text-lg font-extrabold">{formatRupees(trackedOrder.total)}</p></div>
                  <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8b8074]">Delivery</p><p className="mt-1 text-sm font-semibold">{trackedOrder.address}</p></div>
                </div>
                <Link className="mt-4 inline-flex text-sm font-bold text-[#c83226]" href={`/orders/access/${trackedOrder.token}`}>Open private order link</Link>
              </article>
            ) : (
              <p className="rounded-2xl border border-[#eee8dc] bg-white p-5 text-sm text-[#756b60]">
                {hydrated ? "No matching order was found in this browser. Check the ID or use the order link from checkout." : "Loading saved orders…"}
              </p>
            )}
          </section>
        )}

        <section className="mx-auto w-full max-w-6xl px-4 pb-8 sm:px-6 lg:px-8 lg:pb-12">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold tracking-[-0.04em]">Recent orders</h2>
            <Link className="text-sm font-bold text-[#c83226] hover:text-[#a9251d]" href="/menu">Order again</Link>
          </div>
          {!hydrated ? (
            <p className="text-sm text-[#756b60]">Loading saved orders…</p>
          ) : orders.length === 0 ? (
            <div className="rounded-[1.6rem] border border-[#eee8dc] bg-white p-6 text-sm text-[#756b60]">No orders yet. Place an order and it will appear here in this browser.</div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <article className="rounded-[1.6rem] border border-[#eee8dc] bg-white p-5 shadow-[0_8px_24px_rgba(52,41,31,0.04)]" key={order.token}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#648064]">Order {order.id}</p><h3 className="mt-1 text-lg font-bold">{order.items.map((item) => `${item.name} ×${item.quantity}`).join(" · ")}</h3></div>
                    <span className="inline-flex w-fit rounded-full bg-[#fdf1d5] px-3 py-1.5 text-xs font-bold text-[#9f6d14]">{order.status}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#f2ece0] pt-4 text-sm">
                    <span className="font-bold">{formatRupees(order.total)} · ETA {order.eta}</span>
                    <Link className="font-bold text-[#c83226]" href={`/orders/access/${order.token}`}>View order</Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
}
