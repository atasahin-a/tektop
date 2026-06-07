import FeaturedProduct from "@/components/market/FeaturedProduct";
import PageHeader from "@/components/layout/header";
import ProductCard from "@/components/shared/ProductCard";
import { products } from "@/data/product";
import Link from "next/link";

export default function MarketPage() {
  return (
    <>
      <PageHeader title="Market" />

      <section className="mx-auto max-w-[1440px] px-6 py-5">

        {/* Kategoriler */}
        <div className="mb-12 flex gap-24 text-[15px] font-semibold text-[#006C2F]">

          <Link
  href="/market/efsaneler"
  className="cursor-pointer hover:opacity-80 transition"
>
  Efsaneler Özel Koleksiyonu
</Link>

          <Link
  href="/market/bez-canta"
  className="cursor-pointer hover:opacity-80 transition"
>
  Bez Çanta Koleksiyonu
</Link>

          <Link
  href="/market/kupa"
  className="cursor-pointer hover:opacity-80 transition"
>
  Kupa Koleksiyonu
</Link>

          <Link
  href="/market/altlik"
  className="cursor-pointer hover:opacity-80 transition"
>
  Altlık Koleksiyonu
</Link>
          <Link
  href="/market/ozel-tshirt"
  className="cursor-pointer hover:opacity-80 transition"
>
  Özel T-Shirt Koleksiyonu
</Link>

        </div>

        {/* Öne Çıkan Ürün */}
        <div className="mb-8">
          <h2 className="mb-4 text-[24px] font-bold text-[#006C2F]">
  Öne Çıkan Ürünler
</h2>
          <FeaturedProduct />
        </div>

        {/* Ürünler */}
        <div className="grid grid-cols-4 gap-4">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </section>
    </>
  );
}