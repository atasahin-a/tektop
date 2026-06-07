import PageHeader from "@/components/layout/header";

export default function LegendsPage() {
  return (
    <>
      <PageHeader title="Efsaneler" />

      <video
        src="/videos/efsaneler.mp4"
        autoPlay
        muted
        loop
        controls
        playsInline
        className="w-full"
      />
    </>
  );
}