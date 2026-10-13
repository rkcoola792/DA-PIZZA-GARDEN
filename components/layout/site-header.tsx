import Link from "next/link";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/orders", label: "Track order" },
];

function PizzaMark() {
  return (
    <svg
      aria-hidden="true"
      className="h-10 w-10 shrink-0"
      viewBox="0 0 40 40"
      fill="none"
    >
      <circle cx="20" cy="20" r="19" fill="#C83226" />
      <path
        d="M10.5 13.5c6.7-4.2 13.5-4.2 20.2 0L20.6 31.2a.7.7 0 0 1-1.2 0L10.5 13.5Z"
        fill="#FFF9ED"
      />
      <path
        d="m12.8 14.6 14.4-.1-7.1 12.6-7.3-12.5Z"
        fill="#E7A33E"
      />
      <circle cx="17.1" cy="17.3" r="1.2" fill="#C83226" />
      <circle cx="22.9" cy="17.2" r="1.2" fill="#C83226" />
      <path
        d="M20.2 22.6c1.2-2.1 3.2-2.7 4.9-1.5-.6 2.2-2.3 3.4-4.9 3.2"
        fill="#47724E"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3 4h2l2.2 10.1a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 1.9-1.4L21 8H6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <circle cx="10" cy="19" r="1.4" fill="currentColor" />
      <circle cx="18" cy="19" r="1.4" fill="currentColor" />
    </svg>
  );
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#eee8dc] bg-[#fffdf8]/95 text-[#302923] shadow-[0_3px_14px_rgba(52,41,31,0.05)] backdrop-blur">
      <div className="mx-auto flex h-[76px] w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-[84px] lg:px-8">
        <Link
          aria-label="Da Pizza Garden home"
          className="flex min-w-0 shrink-0 items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c83226]"
          href="/"
        >
          <PizzaMark />
          <span className="min-w-0 leading-tight">
            <span className="block whitespace-nowrap font-bold tracking-[-0.04em] text-[#302923] sm:text-lg">
              Da Pizza Garden
            </span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-[#648064] sm:block">
              Fresh from our garden
            </span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navigationLinks.map(({ href, label }) => (
            <Link
              className="rounded py-2 text-sm font-semibold text-[#51483f] transition-colors hover:text-[#c83226] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c83226]"
              href={href}
              key={label}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            aria-label="View your cart"
            className="flex h-11 w-11 items-center justify-center rounded-full text-[#51483f] transition-colors hover:bg-[#f5eee2] hover:text-[#c83226] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c83226]"
            href="/cart"
          >
            <CartIcon />
          </Link>
          <Link
            className="hidden min-h-11 items-center justify-center rounded-full bg-[#c83226] px-5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#a9251d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c83226] sm:inline-flex"
            href="/menu"
          >
            Order online
          </Link>

          <details className="group relative md:hidden">
            <summary
              aria-label="Toggle navigation menu"
              className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full text-[#51483f] transition-colors hover:bg-[#f5eee2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c83226] [&::-webkit-details-marker]:hidden"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.8"
                />
              </svg>
            </summary>
            <nav
              aria-label="Mobile navigation"
              className="absolute right-0 top-[calc(100%+12px)] flex w-[min(17rem,calc(100vw-2rem))] flex-col rounded-2xl border border-[#eee8dc] bg-[#fffdf8] p-2 shadow-xl"
            >
              {navigationLinks.map(({ href, label }) => (
                <Link
                  className="flex min-h-12 items-center rounded-xl px-4 text-sm font-semibold text-[#51483f] transition-colors hover:bg-[#f5eee2] hover:text-[#c83226] focus-visible:outline-2 focus-visible:outline-[#c83226]"
                  href={href}
                  key={label}
                >
                  {label}
                </Link>
              ))}
              <Link
                className="mt-1 flex min-h-12 items-center justify-center rounded-xl bg-[#c83226] px-4 text-sm font-bold text-white transition-colors hover:bg-[#a9251d] focus-visible:outline-2 focus-visible:outline-[#c83226]"
                href="/menu"
              >
                Order online
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
