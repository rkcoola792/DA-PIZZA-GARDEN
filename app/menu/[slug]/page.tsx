import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/layout/site-header";
import { menuItems } from "@/components/store/menu-data";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/store/add-to-cart-button";

export function generateStaticParams() {
  return menuItems.map((item) => ({ slug: item.slug }));
}

export default async function MenuItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = menuItems.find((menuItem) => menuItem.slug === slug);
  if (!item) notFound();

  return (
    <>
      <SiteHeader />

      <main className="flex-1 bg-[#fffdf8] text-[#302923]">
        <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <Link
            className="inline-flex items-center gap-2 text-sm font-bold text-[#c83226] hover:text-[#a9251d]"
            href="/menu"
          >
            ← Back to menu
          </Link>

          <div className="mt-6 grid overflow-hidden rounded-[2rem] border border-[#eee8dc] bg-white shadow-[0_18px_42px_rgba(52,41,31,0.06)] lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[320px] bg-[#f5eee4]">
              <Image
                alt={item.alt}
                className="object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                src={item.image}
              />
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <span
                className={`inline-flex w-fit rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] ${item.accent}`}
              >
                {item.badge}
              </span>

              <h1 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-[#302923] sm:text-4xl">
                {item.name}
              </h1>

              <p className="mt-3 text-sm leading-6 text-[#756b60] sm:text-base">
                {item.description}
              </p>

              <div className="mt-5 flex items-center gap-4 rounded-2xl bg-[#faf7f0] px-4 py-3">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#648064]">
                  {item.category}
                </span>
                <span className="text-xl font-extrabold text-[#c83226]">{item.price}</span>
              </div>

              <div className="mt-6 space-y-3 text-sm text-[#51483f]">
                <div className="flex items-center justify-between rounded-full border border-[#eee8dc] px-4 py-3">
                  <span>Size</span>
                  <span className="font-bold">12&quot; pizza</span>
                </div>
                <div className="flex items-center justify-between rounded-full border border-[#eee8dc] px-4 py-3">
                  <span>Prep time</span>
                  <span className="font-bold">20 minutes</span>
                </div>
                <div className="flex items-center justify-between rounded-full border border-[#eee8dc] px-4 py-3">
                  <span>Best with</span>
                  <span className="font-bold">Garden salad</span>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <AddToCartButton item={item} />
                <Link
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#e7dfd2] px-6 text-sm font-bold text-[#51483f] transition hover:border-[#c83226] hover:text-[#c83226]"
                  href="/menu"
                >
                  Continue exploring
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
