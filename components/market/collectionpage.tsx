import Link from "next/link";
import ProductCard from "@/components/shared/ProductCard";
import { Product } from "@/types/product";

type Props = {
  title: string;
  products: Product[];
};

export default function CollectionPage({
  title,
  products,
}: Props) {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-8">

      <div className="mb-12 flex gap-20 text-[15px] font-semibold text-[#006C2F]">

        <Link href="/market/efsaneler">
  Efsaneler Özel Koleksiyonu
</Link>

<Link href="/market/canta">
  Bez Çanta Koleksiyonu
</Link>

<Link href="/market/kupa">
  Kupa Koleksiyonu
</Link>

<Link href="/market/altlik">
  Altlık Koleksiyonu
</Link>

<Link href="/market/tshirt">
  Özel T-Shirt Koleksiyonu
</Link>

      </div>

      <h1 className="mb-10 text-[24px] font-bold text-[#006C2F]">
  {title}
</h1>

      <div className="grid grid-cols-4 gap-x-8 gap-y-12">
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