import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Search } from "lucide-react";

export default function Navbar() {
 const navClass =
"text-[15px] font-bold text-[#006C2F]";
  return (
    <nav className="bg-[#F5F5F5]">
      <div className="mx-auto grid h-[120px] max-w-[1600px] grid-cols-[180px_1fr_260px] items-center px-8">

        <Link href="/" className="justify-self-start">
          <Image
  src="/logo/logo.svg"
  alt="TekTop"
  width={90}
  height={90}
/>
        </Link>

        <div className="flex items-center justify-center gap-10">

  <Link href="/" className={navClass}>
  Ana Sayfa
</Link>

<Link href="/market" className={navClass}>
  Market
</Link>

<Link href="/history" className={navClass}>
  Tarihçe
</Link>
          <div className="mx-6">
            <div className="flex h-[42px] w-[195px] items-center rounded-full border border-[#006C2F] bg-white px-4 shadow-none">

              <Search
                size={18}
                className="text-[#006C2F]"
              />

              <input
                placeholder="Ara..."
                className="ml-2 w-full bg-transparent text-sm outline-none"
              />
            </div>
          </div>

          <Link href="/legends" className={navClass}>
  Efsaneler
</Link>

<Link href="/profile" className={navClass}>
  Profil
</Link>

<Link href="/about" className={navClass}>
  Hakkımızda
</Link>

        </div>

        <div className="flex items-center gap-8 ml-16">

          <Link href="/favorites">
  <Heart
    size={24}
    className="cursor-pointer text-[#006C2F]"
  />
</Link>

          <Link href="/cart">
  <ShoppingCart
    size={24}
    className="cursor-pointer text-[#006C2F]"
  />
</Link>

          <Link
  href="/register"
  className="rounded-full border-[1px] border-[#FF7B7B] px-5 py-2 text-[14px] font-medium text-[#006C2F]"
>
  Kayıt Ol
</Link>

        </div>

      </div>
    </nav>
  );
}