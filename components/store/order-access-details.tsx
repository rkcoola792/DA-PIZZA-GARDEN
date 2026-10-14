"use client";

import Link from "next/link";
import { useStore, formatRupees } from "@/components/store/store-provider";

export default function OrderAccessDetails({ token }: { token: string }) {
  const { orders, hydrated } = useStore();
  const order = orders.find((candidate) => candidate.token === token);

  if (!hydrated) {
    return <p className="mt-6 text-sm text-[#756b60]">Loading your order…</p>;
  }

  if (!order) {
    return (
      <div className="mt-6 rounded-2xl border border-[#efe5d7] bg-[#faf7f0] p-5">
        <p className="text-base leading-7 text-[#51483f]">
          This order link is invalid or the order is not saved in this browser.
        </p>
        <Link className="mt-4 inline-flex font-bold text-[#c83226]" href="/orders">
          Track an order
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="mt-6 rounded-2xl border border-[#efe5d7] bg-[#faf7f0] p-5">
        <p className="text-base leading-7 text-[#51483f]">
          Thanks, {order.customerName}. Your order is being prepared.
        </p>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[
          { label: "Status", value: order.status },
          { label: "ETA", value: order.eta },
          { label: "Order ID", value: order.id },
        ].map((item) => (
          <div className="rounded-2xl border border-[#eee8dc] bg-[#faf7f0] p-4" key={item.label}>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8b8074]">
              {item.label}
            </p>
            <p className="mt-2 text-xl font-extrabold text-[#302923]">{item.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 space-y-2 text-sm text-[#51483f]">
        {order.items.map((item) => (
          <p key={item.id}>{item.name} × {item.quantity}</p>
        ))}
        <p className="pt-2 font-bold">Total: {formatRupees(order.total)}</p>
      </div>
    </>
  );
}
