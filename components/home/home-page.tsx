import Image from "next/image";
import Link from "next/link";

const popularPizzas = [
  {
    name: "Farmhouse Gourmet",
    description: "Roasted peppers, mushrooms, olives & garden herbs.",
    price: "₹449",
    image: "/images/home/farmhouse-pizza.jpg",
    alt: "Wood-fired pizza topped with fresh vegetables",
    tag: "Garden favorite",
  },
  {
    name: "Smoked Margherita",
    description: "Slow-roasted tomato, creamy mozzarella & fresh basil.",
    price: "₹349",
    image: "/images/home/smoked-margherita.jpg",
    alt: "Freshly baked margherita pizza with basil",
    tag: "Guest favorite",
  },
  {
    name: "Garlic & Burrata",
    description: "Roasted garlic, creamy burrata & fragrant basil oil.",
    price: "₹499",
    image: "/images/home/garlic-burrata.jpg",
    alt: "Artisanal pizza with fresh cheese and toppings",
    tag: "Made for sharing",
  },
];

function LeafIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19.8 4.2C12.1 4.3 6 5.3 4.2 10.1c-1.1 2.9.8 5.3 3.4 5.3 4.5 0 7.1-5.1 12.2-11.2ZM5 21c.5-5.6 3.6-9.1 8.4-11.8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function PinIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="10" r="2.3" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function FeatureIcon({
  kind,
}: {
  kind: "oven" | "leaf" | "delivery";
}) {
  if (kind === "leaf") {
    return <LeafIcon className="h-6 w-6" />;
  }

  if (kind === "delivery") {
    return <PinIcon className="h-6 w-6" />;
  }

  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 3c-1.1 3.3-5.5 6.1-5.5 11a5.5 5.5 0 0 0 11 0c0-2.8-1.8-4.6-3.5-6.3 0 2.3-.7 3.3-1.8 4.1C12.9 8.9 11 7 12 3Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function DeliveryMap() {
  return (
    <div
      aria-label="Illustrated neighborhood map showing our delivery area"
      className="relative min-h-[250px] overflow-hidden rounded-2xl border border-[#eae4d9] bg-[#eef1e7] sm:min-h-[300px]"
      role="img"
    >
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 600 360"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <path d="M-20 78 620 250M80-20 330 390M412-30 240 390M-20 310 620 90" stroke="#d9dfcf" strokeWidth="24" />
        <path d="m-20 78 640 172M80-20l250 410M412-30 240 390M-20 310 620 90" stroke="#fffdf8" strokeWidth="13" />
        <path d="M-10 182h620M188-10v390M495-10v390" stroke="#d8d5c9" strokeWidth="2" strokeDasharray="7 8" />
        <path d="M300 175c22-29 50-29 72 0-22 29-50 29-72 0Z" fill="#c83226" fillOpacity=".1" stroke="#c83226" strokeDasharray="5 5" strokeWidth="2" />
        <circle cx="336" cy="174" r="25" fill="#c83226" fillOpacity=".13" />
        <circle cx="336" cy="174" r="10" fill="#c83226" />
        <circle cx="336" cy="174" r="3" fill="white" />
      </svg>
      <span className="absolute bottom-4 left-4 rounded-full border border-white/80 bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#4d614b] shadow-sm">
        Serving a 5 km radius
      </span>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <main className="flex-1 bg-[#fffdf8] text-[#302923]">
        <section className="mx-auto grid w-full max-w-7xl items-center gap-9 px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:px-8 lg:pb-20 lg:pt-14">
          <div className="relative z-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dce8d7] bg-[#eff5ec] px-3.5 py-2 text-xs font-bold text-[#567653] sm:text-sm">
              <LeafIcon className="h-4 w-4" />
              Sourdough, slow-fermented, always fresh
            </div>
            <h1 className="max-w-2xl text-[2.7rem] font-bold leading-[1.05] tracking-[-0.055em] text-[#302923] sm:text-5xl lg:text-[4.15rem]">
              Wood-fired pies
              <br />
              with an <span className="text-[#c83226]">artisanal soul.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#756b60] sm:mt-6 sm:text-lg sm:leading-8">
              Thoughtful ingredients, a patient sourdough rise, and a very hot
              oven. Good pizza takes time—and tastes better because of it.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
              <Link
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#c83226] px-6 text-sm font-bold text-white shadow-[0_8px_20px_rgba(200,50,38,.2)] transition hover:-translate-y-0.5 hover:bg-[#a9251d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c83226]"
                href="/menu"
              >
                Explore the menu <ArrowIcon />
              </Link>
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#e7dfd2] px-6 text-sm font-bold text-[#51483f] transition hover:border-[#c83226] hover:text-[#c83226] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c83226]"
                href="/menu"
              >
                How we make it
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#eee8dc] pt-5 text-xs font-medium text-[#756b60] sm:mt-10 sm:gap-x-8 sm:text-sm">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#6e9569]" />
                Naturally fermented dough
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#d7a04a]" />
                Baked fresh to order
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
            <div className="absolute -inset-3 -rotate-2 rounded-[2rem] bg-[#f2eadb] sm:-inset-4" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#eee5d8] shadow-[0_22px_65px_rgba(63,46,31,.16)] sm:rounded-[1.8rem]">
              <Image
                alt="Golden wood-fired pizza topped with basil, tomato and fresh mozzarella"
                className="object-cover"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                src="/images/home/hero-pizza.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#201a14]/30 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 sm:bottom-6 sm:left-6 sm:right-6">
                <span className="rounded-full border border-white/40 bg-white/90 px-3 py-2 text-xs font-bold text-[#51483f] shadow-sm backdrop-blur sm:px-4 sm:text-sm">
                  Straight from our oven
                </span>
                <span className="rounded-2xl bg-white px-4 py-3 shadow-lg sm:px-5 sm:py-3.5">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#84796d]">
                    The garden special
                  </span>
                  <span className="mt-1 block text-sm font-bold text-[#302923] sm:text-base">
                    Made with love <span className="text-[#c83226]">♡</span>
                  </span>
                </span>
              </div>
            </div>
            <span className="absolute -right-2 -top-3 grid h-[4.5rem] w-[4.5rem] rotate-6 place-items-center rounded-full border-4 border-[#fffdf8] bg-[#c83226] text-center text-[10px] font-extrabold uppercase leading-tight tracking-wide text-white shadow-lg sm:-right-4 sm:-top-4 sm:h-20 sm:w-20 sm:text-xs">
              100%
              <br />
              sourdough
            </span>
          </div>
        </section>

        <section
          aria-labelledby="popular-heading"
          className="border-y border-[#f0eadf] bg-[#faf7f0] py-12 sm:py-16 lg:py-20"
        >
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-7 flex items-end justify-between gap-4 sm:mb-9">
              <div>
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#c83226]">
                  From our oven to your table
                </p>
                <h2
                  className="text-2xl font-bold tracking-[-0.04em] text-[#302923] sm:text-3xl"
                  id="popular-heading"
                >
                  Popular neighborhood picks
                </h2>
              </div>
              <Link
                className="hidden shrink-0 items-center gap-2 pb-1 text-sm font-bold text-[#c83226] hover:text-[#a9251d] sm:inline-flex"
                href="/menu"
              >
                See full menu <ArrowIcon />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {popularPizzas.map((pizza) => (
                <article
                  className="group overflow-hidden rounded-2xl border border-[#eee8dc] bg-white shadow-[0_6px_20px_rgba(52,41,31,.04)] transition hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(52,41,31,.1)]"
                  key={pizza.name}
                >
                  <div className="relative aspect-[1.65/1] overflow-hidden bg-[#eee5d8]">
                    <Image
                      alt={pizza.alt}
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      src={pizza.image}
                    />
                    <span className="absolute left-3 top-3 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-[10px] font-bold text-[#567653] shadow-sm backdrop-blur">
                      {pizza.tag}
                    </span>
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-base font-bold tracking-tight text-[#302923] sm:text-lg">
                        {pizza.name}
                      </h3>
                      <span className="shrink-0 text-base font-extrabold text-[#c83226]">
                        {pizza.price}
                      </span>
                    </div>
                    <p className="mt-2 min-h-10 text-sm leading-5 text-[#756b60]">
                      {pizza.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-[#f0eadf] pt-4">
                      <span className="text-xs font-medium text-[#8b8074]">
                        12&quot; · serves 1–2
                      </span>
                      <Link
                        aria-label={`View ${pizza.name} on the menu`}
                        className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#c83226] px-4 text-xs font-bold text-white transition hover:bg-[#a9251d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c83226]"
                        href="/menu"
                      >
                        View menu <ArrowIcon />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <Link
              className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#e7dfd2] text-sm font-bold text-[#c83226] sm:hidden"
              href="/menu"
            >
              See the full menu <ArrowIcon />
            </Link>
          </div>
        </section>

        <section
          aria-labelledby="why-heading"
          className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
        >
          <div className="mx-auto mb-8 max-w-xl text-center sm:mb-10">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#648064]">
              A little more care in every slice
            </p>
            <h2
              className="text-2xl font-bold tracking-[-0.04em] text-[#302923] sm:text-3xl"
              id="why-heading"
            >
              Why Da Pizza Garden?
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#756b60] sm:text-base">
              Simple ingredients, patient craft, and the kind of pizza worth
              gathering around.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                kind: "oven" as const,
                title: "48-hour sourdough",
                body: "Slow fermentation builds a light, airy crust with just the right chew and a little extra flavor.",
                color: "bg-[#fbefea] text-[#c83226]",
              },
              {
                kind: "leaf" as const,
                title: "Real, seasonal ingredients",
                body: "Ripe tomatoes, fresh herbs, and thoughtfully sourced ingredients make every topping count.",
                color: "bg-[#eff5ec] text-[#648064]",
              },
              {
                kind: "delivery" as const,
                title: "Fresh to your door",
                body: "We bake when you order and bring your pizza hot, crisp, and ready to share.",
                color: "bg-[#f7f1e6] text-[#b17827]",
              },
            ].map((feature) => (
              <article
                className="rounded-2xl border border-[#eee8dc] bg-white p-5 shadow-[0_5px_18px_rgba(52,41,31,.035)] sm:p-6"
                key={feature.title}
              >
                <span
                  className={`grid h-11 w-11 place-items-center rounded-xl ${feature.color}`}
                >
                  <FeatureIcon kind={feature.kind} />
                </span>
                <h3 className="mt-4 font-bold text-[#302923]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#756b60]">
                  {feature.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="delivery-heading"
          className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20"
        >
          <div className="grid overflow-hidden rounded-[1.75rem] border border-[#eee8dc] bg-[#f7f4ec] lg:grid-cols-2">
            <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
              <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#648064]">
                <PinIcon className="h-4 w-4" />
                At your doorstep
              </span>
              <h2
                className="max-w-md text-2xl font-bold leading-tight tracking-[-0.04em] text-[#302923] sm:text-3xl"
                id="delivery-heading"
              >
                Check if you&apos;re in our delivery neighborhood
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-[#756b60] sm:text-base">
                We deliver fresh, wood-fired pizza within 5 km. Find your new
                favorite and let us bring it to you.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#c83226] px-6 text-sm font-bold text-white transition hover:bg-[#a9251d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c83226]"
                  href="/menu"
                >
                  Order for delivery <ArrowIcon />
                </Link>
                <span className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#e7dfd2] bg-white/70 px-5 text-sm font-semibold text-[#51483f]">
                  Free delivery within 5 km
                </span>
              </div>
            </div>
            <div className="p-4 pt-0 sm:p-6 sm:pt-0 lg:p-6">
              <DeliveryMap />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#eee8dc] bg-[#faf7f0]">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-9 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8 lg:py-11">
          <div>
            <Link
              className="text-lg font-extrabold tracking-[-0.04em] text-[#c83226]"
              href="/"
            >
              Da Pizza Garden
            </Link>
            <p className="mt-2 max-w-sm text-sm leading-6 text-[#756b60]">
              Sourdough-crusted, slow-fermented, wood-fired artisanal pies.
              Made fresh for your table.
            </p>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[#51483f]">
              Explore
            </h2>
            <div className="mt-3 flex flex-col items-start gap-2 text-sm text-[#756b60]">
              <Link className="hover:text-[#c83226]" href="/menu">
                Our menu
              </Link>
              <Link className="hover:text-[#c83226]" href="/orders">
                Track an order
              </Link>
              <Link className="hover:text-[#c83226]" href="/cart">
                Your cart
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[#51483f]">
              Come hungry
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#756b60]">
              Freshly baked, made to order.
              <br />
              Bringing the neighborhood together, one slice at a time.
            </p>
          </div>
        </div>
        <div className="border-t border-[#eee8dc]">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-4 text-xs text-[#8b8074] sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <span>© 2026 Da Pizza Garden. All rights reserved.</span>
            <span>Good pizza. Good company. Always.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
