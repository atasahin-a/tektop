import Image from "next/image";
import PageHeader from "@/components/layout/header";

export default function HistoryPage() {
  return (
    <>
      <PageHeader title="Tarihçe" />

      <section className="mx-auto max-w-[1200px] px-6 py-10">

        <Image
          src="/images/products/tarihce.jpeg"
          alt="Tarihçe"
          width={1200}
          height={3000}
          className="w-full rounded-[12px]"
        />

      </section>
    </>
  );
}