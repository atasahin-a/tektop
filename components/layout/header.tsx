import Image from "next/image";

type Props = {
  title: string;
};

export default function PageHeader({ title }: Props) {
  return (
    <section className="relative h-[120px] overflow-hidden bg-[#00852B]">

      <div className="absolute right-0 top-0 h-full w-[420px]">
        <Image
          src="/images/header/header-pattern.png"
          alt="Pattern"
          fill
          className="object-cover opacity-90"
        />
      </div>

      <div className="relative mx-auto flex h-full max-w-[1440px] items-center px-6">

        <h1 className="text-[42px] font-bold text-white">
          {title}
        </h1>

      </div>

    </section>
  );
}