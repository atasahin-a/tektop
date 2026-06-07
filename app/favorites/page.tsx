"use client";

import { useEffect, useState } from "react";
import PageHeader from "@/components/layout/header";
import ProductCard from "@/components/shared/ProductCard";
import { allProducts } from "@/data/allProducts";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    setFavorites(storedFavorites);
  }, []);

  const favoriteProducts = allProducts.filter((product) =>
    favorites.includes(product.id)
  );

  const suggestedProducts = allProducts
    .filter((product) => !favorites.includes(product.id))
    .slice(0, 4);

  return (
    <>
      <PageHeader title="Favorilerim" />

      <section className="mx-auto max-w-[1440px] px-6 py-10">

        {/* Favoriler */}
        <div className="grid grid-cols-4 gap-4">

          {favoriteProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

        {/* Beğenebileceğiniz Ürünler */}
        <div className="mt-20">

          <h2 className="mb-6 text-[24px] font-semibold text-[#111]">
            Beğenebileceğiniz Ürünler
          </h2>

          <div className="grid grid-cols-4 gap-4">

            {suggestedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        </div>

      </section>
    </>
  );
}