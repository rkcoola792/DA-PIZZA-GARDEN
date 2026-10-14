import Link from "next/link";
import SiteHeader from "@/components/layout/site-header";
import OrderAccessDetails from "@/components/store/order-access-details";

export function generateStaticParams() {
  return [{ token: "demo-link" }];
}

export default async function OrderAccessPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  return (
    <>
      <SiteHeader />

      <main className="flex-1 bg-[#fffdf8] text-[#302923]">
        <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="rounded-[2rem] border border-[#eee8dc] bg-white p-6 shadow-[0_18px_42px_rgba(52,41,31,0.06)] sm:p-8 lg:p-10">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#648064]">
              Access link
            </p>
            <h1 className="text-3xl font-bold tracking-[-0.05em] text-[#302923] sm:text-4xl">
              Order access
            </h1>

            <OrderAccessDetails token={token} />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#c83226] px-6 text-sm font-bold text-white transition hover:bg-[#a9251d]"
                href="/orders"
              >
                View order status
              </Link>
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#e7dfd2] px-6 text-sm font-bold text-[#51483f] transition hover:border-[#c83226] hover:text-[#c83226]"
                href="/menu"
              >
                Order again
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
