import CollectionPage from "@/components/market/collectionpage";
import PageHeader from "@/components/layout/header";
import { kupaProducts } from "@/data/kupaProducts";

export default function KupaPage() {
  return (
    <>
    <PageHeader title="Market" />

    <CollectionPage
      title="Kupa Koleksiyonu"
      products={kupaProducts}
    />
    </>
  );
}