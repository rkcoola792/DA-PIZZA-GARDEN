"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/layout/site-header";
import { drinks, menuItems, sideItems } from "@/components/store/menu-data";
import { useStore } from "@/components/store/store-provider";

const categories = ["All", "Signature pies", "Chef specials", "Vegetarian"];

export default function MenuPage() {
  const [category, setCategory] = useState("All");
  const { addItem } = useStore();
  const filteredItems = category === "All"
    ? menuItems
    : menuItems.filter((item) => item.category === category);

  return (
    <>
      <SiteHeader />

      <main className="flex-1 bg-[#fffdf8] text-[#302923]">
        <section className="mx-auto w-full max-w-7xl px-4 pb-10 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pb-14 lg:pt-12">
          <div className="overflow-hidden rounded-[2rem] border border-[#eee8dc] bg-[radial-gradient(circle_at_top_left,_rgba(200,50,38,0.08),_transparent_32%),linear-gradient(135deg,#fffdf8,#f9f2e8)] p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#c83226]">
                  Our menu
                </p>
                <h1 className="max-w-xl text-3xl font-bold tracking-[-0.05em] text-[#302923] sm:text-4xl lg:text-5xl">
                  Wood-fired favorites made for sharing.
                </h1>
              </div>
              <div className="flex flex-wrap gap-2 rounded-full border border-[#e7dfd2] bg-white/80 p-2">
                {categories.map((categoryName) => (
                  <button
                    aria-pressed={category === categoryName}
                    className={`rounded-full px-3.5 py-2 text-sm font-semibold transition ${
                      category === categoryName
                        ? "bg-[#c83226] text-white shadow-sm"
                        : "text-[#51483f] hover:bg-[#f5eee2]"
                    }`}
                    key={categoryName}
                    onClick={() => setCategory(categoryName)}
                    type="button"
                  >
                    {categoryName}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
          <div className="mb-5 flex items-center justify-between gap-3">
            <h2 className="text-2xl font-bold tracking-[-0.04em] text-[#302923]">
              {category === "All" ? "Signature pizzas" : category}
            </h2>
            <span className="text-sm font-medium text-[#756b60]">12&quot; pies</span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredItems.map((item) => (
              <article
                className="group overflow-hidden rounded-[1.6rem] border border-[#eee8dc] bg-white shadow-[0_8px_24px_rgba(52,41,31,0.04)] transition hover:-translate-y-1 hover:shadow-[0_20px_38px_rgba(52,41,31,0.09)]"
                key={item.slug}
              >
                <div className="relative aspect-[1.55/1] overflow-hidden bg-[#f5eee4]">
                  <Image
                    alt={item.alt}
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    src={item.image}
                  />
                  <span
                    className={`absolute left-3 top-3 rounded-full px-2.5 py-1.5 text-[10px] font-bold ${item.accent}`}
                  >
                    {item.badge}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#648064]">
                        {item.category}
                      </p>
                      <h3 className="mt-2 text-xl font-bold tracking-[-0.04em] text-[#302923]">
                        {item.name}
                      </h3>
                    </div>
                    <span className="text-lg font-extrabold text-[#c83226]">
                      {item.price}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-[#756b60]">
                    {item.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#f2ece0] pt-4">
                    <span className="text-xs font-medium text-[#8b8074]">
                      Fire-baked · 20 mins
                    </span>
                    <Link
                      className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#c83226] px-4 text-xs font-bold text-white transition hover:bg-[#a9251d]"
                      href={`/menu/${item.slug}`}
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.8rem] border border-[#eee8dc] bg-[#faf7f0] p-5 sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#c83226]">
                    Add-ons
                  </p>
                  <h2 className="text-2xl font-bold tracking-[-0.04em] text-[#302923]">
                    Sides worth sharing
                  </h2>
                </div>
              </div>

              <div className="space-y-4">
                {sideItems.map((side) => (
                  <div
                    className="flex items-center justify-between gap-4 rounded-2xl border border-[#efe5d7] bg-white p-4"
                    key={side.name}
                  >
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#648064]">
                        {side.badge}
                      </p>
                      <h3 className="mt-1 text-base font-bold text-[#302923]">
                        {side.name}
                      </h3>
                      <p className="mt-1 text-sm text-[#756b60]">{side.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="block text-base font-extrabold text-[#302923]">
                        {side.price}
                      </span>
                      <button
                        className="mt-2 rounded-full border border-[#e7dfd2] px-3 py-1.5 text-xs font-bold text-[#51483f] transition hover:border-[#c83226] hover:text-[#c83226]"
                        type="button"
                        onClick={() => addItem({
                          id: `side:${side.name}`,
                          name: side.name,
                          detail: "Side",
                          price: Number(side.price.replace(/[^\d]/g, "")),
                        })}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-[#eee8dc] bg-white p-5 shadow-[0_8px_24px_rgba(52,41,31,0.04)] sm:p-6">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#648064]">
                Drinks
              </p>
              <h2 className="text-2xl font-bold tracking-[-0.04em] text-[#302923]">
                Fresh pours & cool downs
              </h2>

              <div className="mt-5 space-y-3">
                {drinks.map((drink) => (
                  <div
                    className="flex items-center justify-between rounded-2xl bg-[#faf7f0] px-4 py-3"
                    key={drink.name}
                  >
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#648064]">
                        {drink.badge}
                      </span>
                      <span className="mt-1 block text-base font-bold text-[#302923]">
                        {drink.name}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="block text-base font-extrabold text-[#302923]">
                        {drink.price}
                      </span>
                      <button
                        className="mt-2 rounded-full border border-[#e7dfd2] px-3 py-1.5 text-xs font-bold text-[#51483f] transition hover:border-[#c83226] hover:text-[#c83226]"
                        onClick={() => addItem({
                          id: `drink:${drink.name}`,
                          name: drink.name,
                          detail: "Drink",
                          price: Number(drink.price.replace(/[^\d]/g, "")),
                        })}
                        type="button"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#c83226] px-6 text-sm font-bold text-white transition hover:bg-[#a9251d]"
                href="/cart"
              >
                Ready to order
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
