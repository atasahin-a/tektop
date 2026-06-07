"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/layout/header";
import { allProducts } from "@/data/allProducts";
import Link from "next/link";

export default function CartPage() {
  const [cartIds, setCartIds] = useState<number[]>([]);

  useEffect(() => {
    const cart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    setCartIds(cart);
  }, []);

  const cartProducts = allProducts.filter(
    (product) => cartIds.includes(product.id)
  );

  const removeFromCart = (productId: number) => {
    const updatedCart = cartIds.filter(
      (id) => id !== productId
    );

    setCartIds(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  const subtotal = cartProducts.reduce(
    (sum, product) => sum + product.price,
    0
  );

  const shipping = cartProducts.length > 0 ? 50 : 0;

  const total = subtotal + shipping;

  return (
    <>
      <PageHeader title="Sepetim" />

      <section className="mx-auto max-w-[1440px] px-6 py-10">

        {cartProducts.length === 0 ? (
          <div className="text-center text-[24px] text-[#555]">
            Sepetiniz boş.
          </div>
        ) : (
          <>
            <div className="grid gap-6">

              {cartProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-8 rounded-[24px] bg-[#F5F5F5] p-6"
                >
                  <div className="relative h-[180px] w-[180px] overflow-hidden rounded-[18px] bg-[#D9D9D9]">

                    <Image
  src={product.image}
  alt={product.title}
  fill
  className="object-cover"
/>

                  </div>

                  <div className="flex-1">

                    <h2 className="mb-3 text-[22px] font-semibold">
                      {product.title}
                    </h2>

                    <p className="text-[18px] text-[#006C2F] font-medium">
                      ₺{product.price}
                    </p>

                  </div>

                  <button
                    onClick={() =>
                      removeFromCart(product.id)
                    }
                    className="rounded-full border border-red-400 px-6 py-2 text-red-500 transition hover:bg-red-50"
                  >
                    Kaldır
                  </button>

                </div>
              ))}

            </div>

            {/* Sipariş Özeti */}

            <div className="mt-16 ml-left w-[420px] rounded-[24px] bg-[#F5F5F5] p-8">

              <h2 className="mb-8 text-[28px] font-semibold">
                Sipariş Özeti
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <span>Ürünler</span>
                  <span>₺{subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span>Kargo</span>
                  <span>₺{shipping}</span>
                </div>

                <div className="h-px bg-gray-300" />

                <div className="flex justify-between text-[20px] font-semibold">
                  <span>Toplam</span>
                  <span>₺{total}</span>
                </div>

              </div>

              <Link
  href="/checkout"
  className="mt-8 block w-full rounded-full bg-[#00852B] py-4 text-center text-white transition hover:opacity-90"
>
  SATIN AL
</Link>

            </div>
          </>
        )}

      </section>
    </>
  );
}