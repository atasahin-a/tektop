import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="mx-auto mt-8 max-w-7xl px-6">

      <div className="overflow-hidden rounded-[32px] shadow-lg">

        <Image
          src="/images/hero/team.jpg"
          alt="Milli Takım"
          width={1400}
          height={800}
          className="w-full object-cover"
          priority
        />

      </div>

    </section>
  );
}