import SiteHeader from "@/components/layout/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-[calc(100vh-76px)] flex-1 bg-[#fffdf8] lg:min-h-[calc(100vh-84px)]" />
    </>
  );
}
