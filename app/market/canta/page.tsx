import CollectionPage from "@/components/market/collectionpage";
import PageHeader from "@/components/layout/header";
import { bezCantaProducts } from "@/data/databezcantaProducts";

export default function BezCantaPage() {
  return (
    <>
     <PageHeader title="Market" />
    <CollectionPage
      title="Bez Çanta Koleksiyonu"
      products={bezCantaProducts}
    />
    </>
  );
}