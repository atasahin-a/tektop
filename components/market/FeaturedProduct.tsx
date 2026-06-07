"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  ShoppingCart,
} from "lucide-react";

export default function FeaturedProduct() {
  const featuredProducts = [
    "/images/products/legendstshirt1.jpeg",
    "/images/products/legendstshirt2.jpeg",
    "/images/products/legendstshirt3.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProduct = () => {
    setCurrentIndex((prev) =>
      prev === featuredProducts.length - 1 ? 0 : prev + 1
    );
  };

  const prevProduct = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? featuredProducts.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative mb-12 h-[500px] overflow-hidden rounded-[24px] bg-[#BFBFBF]">

      {/* Sol Ok */}
      <button
        onClick={prevProduct}
        className="absolute left-8 top-1/2 z-20 -translate-y-1/2 cursor-pointer rounded-full p-3 transition-all duration-200 hover:scale-110 hover:bg-white/20 active:scale-95"
      >
        <ChevronLeft
          size={42}
          strokeWidth={2.5}
        />
      </button>

      {/* Sağ Ok */}
      <button
        onClick={nextProduct}
        className="absolute right-8 top-1/2 z-20 -translate-y-1/2 cursor-pointer rounded-full p-3 transition-all duration-200 hover:scale-110 hover:bg-white/20 active:scale-95"
      >
        <ChevronRight
          size={42}
          strokeWidth={2.5}
        />
      </button>

      {/* İkonlar */}
      <div className="absolute right-6 top-6 z-20 flex gap-3">

        <button className="cursor-pointer">
          <Heart
            size={22}
            strokeWidth={2}
          />
        </button>

        <button className="cursor-pointer">
          <ShoppingCart
            size={22}
            strokeWidth={2}
          />
        </button>

      </div>

      {/* Ürün */}
     <div className="flex h-full items-center justify-center">

  <div className="relative h-[720px] w-[420px]">

    <Image
      src={featuredProducts[currentIndex]}
      alt="Featured Product"
      fill
      priority
      className="object-contain"
    />

  </div>

</div>

    </div>
  );
}