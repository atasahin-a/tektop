import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-32">

      <div className="mx-auto max-w-[1600px] px-16">


        {/* Menü Alanı */}
        <div className="grid grid-cols-3 py-20 text-center text-[18px] font-medium text-[#006C2F]">

         {/* Sol */}
<div className="space-y-12">

  <Link
    href="/"
    className="block"
  >
    Ana Sayfa
  </Link>

  <Link
    href="/favorites"
    className="block"
  >
    Favorilerim
  </Link>

  <Link
    href="/market"
    className="block"
  >
    Market
  </Link>

</div>

          {/* Orta */}
          <div className="relative space-y-12">

            <div className="absolute left-0 top-1/2 h-[220px] w-[2px] -translate-y-1/2 bg-[#006C2F]" />

            <Link
              href="/history"
              className="block"
            >
              Tarihçe
            </Link>

            <Link
              href="/legends"
              className="block"
            >
              Efsaneler
            </Link>

            <p>Kayıt Ol</p>

          </div>

          {/* Sağ */}
          <div className="relative space-y-12">

            <div className="absolute left-0 top-1/2 h-[220px] w-[2px] -translate-y-1/2 bg-[#006C2F]" />

            <p>Profil</p>

            <Link
              href="/about"
              className="block"
            >
              Hakkımızda
            </Link>

          </div>

        </div>

        {/* Alt Çizgi */}
        <div className="h-[2px] w-full bg-[#006C2F]" />

        {/* Alt Alan */}
        <div className="grid grid-cols-[250px_1fr] items-center py-20">

          {/* Logo */}
          <Image
            src="/logo/logo.svg"
            alt="TekTop"
            width={150}
            height={150}
          />

          {/* Takip Alanı */}
          <div className="flex items-center justify-center gap-10 text-[#006C2F] -ml-[120px]">

            <div className="text-center">
              <p className="text-[32px] font-extrabold leading-none">
                BİZİ
              </p>

              <p className="text-[32px] font-extrabold leading-none">
                TAKİP EDİN
              </p>
            </div>

            <ArrowRight
              size={54}
              strokeWidth={2.5}
            />

           <Link
  href="https://www.instagram.com/tektopresmi/"
  target="_blank"
  className="flex items-center gap-8"
>

  <Image
    src="/logo/insta2.jpeg"
    alt="Instagram"
    width={72}
    height={72}
  />

  <span className="text-[34px] font-bold text-[#006C2F]">
    @tektopresmi
  </span>

</Link>

          </div>

        </div>

      </div>

    </footer>
  );
}