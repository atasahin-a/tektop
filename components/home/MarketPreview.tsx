import { products } from "@/data/product";
import ProductCard from "@/components/shared/ProductCard";
import Image from "next/image";

export default function MarketPreview() {
  return (
    <section className="mx-auto mt-16 max-w-[1600px] px-12">

      <h2 className="mb-8 text-[50px] font-bold leading-none text-[#006C2F]">
  Market
</h2>

      <div className="grid grid-cols-4 gap-10">

      {products.map((product) => (
  <ProductCard
    key={product.id}
    product={product}
  />
))}

      </div>

    </section>
  );
}