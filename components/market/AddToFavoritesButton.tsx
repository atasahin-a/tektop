"use client";

import { useState, useEffect } from "react";

type Props = {
  productId: number;
};

export default function AddToFavoritesButton({
  productId,
}: Props) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    setIsFavorite(favorites.includes(productId));
  }, [productId]);

  const handleFavorite = () => {
    const favorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    let updated;

    if (favorites.includes(productId)) {
      updated = favorites.filter(
        (id: number) => id !== productId
      );
      setIsFavorite(false);
    } else {
      updated = [...favorites, productId];
      setIsFavorite(true);
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );

    window.dispatchEvent(
      new Event("favoritesUpdated")
    );
  };

  return (
    <button
      onClick={handleFavorite}
      className="rounded-full bg-[#00852B] px-8 py-3 text-sm font-medium text-white transition hover:opacity-90"
    >
      {isFavorite
        ? "Favorilerden Çıkar"
        : "Favorilerime Ekle"}
    </button>
  );
}