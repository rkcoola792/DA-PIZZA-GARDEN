"use client";

import { useState } from "react";
import type { MenuItem } from "@/components/store/menu-data";
import { useStore } from "@/components/store/store-provider";

export default function AddToCartButton({ item }: { item: MenuItem }) {
  const { addItem } = useStore();
  const [added, setAdded] = useState(false);

  return (
    <button
      className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#c83226] px-6 text-sm font-bold text-white transition hover:bg-[#a9251d]"
      onClick={() => {
        addItem({
          id: `pizza:${item.slug}`,
          name: item.name,
          detail: "12 inch pizza",
          price: Number(item.price.replace(/[^\d]/g, "")),
        });
        setAdded(true);
      }}
      type="button"
    >
      {added ? "Added to cart" : "Add to cart"}
    </button>
  );
}
