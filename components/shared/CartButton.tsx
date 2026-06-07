"use client";

import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  productId: number;
};

export default function CartButton({
  productId,
}: Props) {
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    const cart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    setInCart(cart.includes(productId));
  }, [productId]);

  const toggleCart = (
    e: React.MouseEvent
  ) => {
    e.preventDefault();
    e.stopPropagation();

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
      onClick={toggleCart}
      className="transition duration-200 hover:scale-110 active:scale-95"
    >
      <ShoppingCart
        size={25}
        fill={inCart ? "#000" : "none"}
        className="text-black"
      />
    </button>
  );
}