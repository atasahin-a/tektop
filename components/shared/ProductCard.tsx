import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { Product } from "@/types/product";
import FavoriteButton from "./FavoriteButton";
import CartButton from "./CartButton";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Link
  href={`/market/${product.id}`}
  className="group block"
>

<div className="relative flex h-[310px] w-[300px] items-center justify-center overflow-hidden rounded-[50px] bg-[#d9d9d9]">

        <div className="absolute right-5 top-2 z-10 flex gap-1">
          <button>
           <FavoriteButton
  productId={product.id}
/>
          </button>

         <CartButton
  productId={product.id}
/>

        </div>

        <Image
  src={product.image}
  alt={product.title}
  width={500}
  height={500}
  className="h-[350px] w-[300px] object-contain transition duration-300 group-hover:scale-105"
/>

      </div>

      <div className="mt-5 h-[30px] w-[300px] rounded-full bg-[#00852B]" />

      

      </Link>
  );
}