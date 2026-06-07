"use client";

import { useEffect, useState } from "react";

type Props = {
  productId: number;
};

export default function AddToCartButton({
  productId,
}: Props) {
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    const cart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    setInCart(cart.includes(productId));
  }, [productId]);

  const handleCart = () => {
    const cart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    let updated;

    if (cart.includes(productId)) {
      updated = cart.filter(
        (id: number) => id !== productId
      );

      setInCart(false);
    } else {
      updated = [...cart, productId];

      setInCart(true);
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(updated)
    );

    window.dispatchEvent(
      new Event("cartUpdated")
    );
  };

  return (
    <button
      onClick={handleCart}
      className={`rounded-full px-8 py-3 text-sm font-medium text-white transition-all duration-200 hover:scale-105 active:scale-95 ${
        inCart
          ? "bg-[#006C2F]"
          : "bg-[#00852B]"
      }`}
    >
      {inCart
        ? "Sepetten Çıkar"
        : "Sepetime Ekle"}
    </button>
  );
}