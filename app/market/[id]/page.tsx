import { allProducts } from "@/data/allProducts";
import Image from "next/image";
import FavoriteButton from "@/components/shared/FavoriteButton";
import ProductCard from "@/components/shared/ProductCard";
import PageHeader from "@/components/layout/header";
import AddToFavoritesButton from "@/components/market/AddToFavoritesButton";
import AddToCartButton from "@/components/market/AddToCartButton";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetailPage({
  params,
}:
 Props) {
  const { id } = await params;

 const product = allProducts.find(
  (item) => item.id === Number(id)
);  

  if (!product) {
    return <div>Ürün bulunamadı.</div>;
  }
const hasSizeSelection =
  product.category === "efsaneler" ||
  product.category === "ozel-tshirt";
  return (
    <>
    <PageHeader title="Market" />

    <section className="mx-auto max-w-7xl px-6 py-10">

      <div className="grid grid-cols-2 gap-12">

        <div>

          <div className="rounded-[32px] bg-[#D9D9D9]">

  <Image
    src={product.image}
    alt={product.title}
    width={700}
    height={700}
    className="w-full rounded-[24px] object-contain"
  />

</div>

        </div>

       <div className="pt-4">

  <h1 className="mb-6 text-[28px] font-semibold text-[#1A1A1A]">
    {product.title}
  </h1>
  <div className="mb-6 h-[30px] w-[360px] rounded-full bg-[#00852B]" />

  <div className="mb-8 flex gap-4">

    <AddToFavoritesButton
  productId={product.id}
/>

    <AddToCartButton
  productId={product.id}
/>

  </div>

  {hasSizeSelection && (
  <div className="mb-8">

    <p className="mb-4 text-[16px] font-medium">
      Beden Seçimi
    </p>

    <div className="grid grid-cols-3 gap-3 max-w-[240px]">

      {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
        <button
          key={size}
          className="h-[44px] rounded-full border border-[#707070] text-[14px]"
        >
          {size}
        </button>
      ))}

    </div>

  </div>
)}

  <div>

    <p className="mb-4 text-[16px] font-medium">
      Renk Seçimi
    </p>

    <div className="flex gap-3">

      <button className="h-8 w-8 rounded-full border border-gray-400 bg-white" />

      <button className="h-8 w-8 rounded-full bg-[#4F8B5B]" />

      <button className="h-8 w-8 rounded-full bg-[#666666]" />

    </div>

  </div>
  

</div>


      </div>

      <div className="mt-20">

  <h2 className="mb-6 text-[24px] font-semibold text-[#111]">
    Beğenebileceğiniz Ürünler
  </h2>

  <div className="grid grid-cols-4 gap-4">

    {allProducts
      .filter((item) => item.id !== product.id)
      .slice(0, 4)
      .map((item) => (
        <ProductCard
          key={item.id}
          product={item}
        />
      ))}

  </div>

</div>

    </section>
</>
  );
}