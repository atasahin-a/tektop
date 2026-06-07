"use client";

import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  productId: number;
};

export default function FavoriteButton({
  productId,
}: Props) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    setIsFavorite(
      favorites.includes(productId)
    );
  }, [productId]);

  const toggleFavorite = (
  e: React.MouseEvent
) => {
  e.preventDefault();
  e.stopPropagation();

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
};

  return (
    <button
  onClick={toggleFavorite}
  className="transition duration-200 hover:scale-110 active:scale-95"
>
      <Heart
  size={25}
  fill={isFavorite ? "#000000" : "none"}
  className={`text-black transition-all duration-200 ${
    isFavorite ? "scale-120" : ""
  }`}
/>
    </button>
  );
}