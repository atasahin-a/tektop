import CollectionPage from "@/components/market/collectionpage";
import PageHeader from "@/components/layout/header";

import { ozelTshirtProducts } from "@/data/tshirtProducts";

export default function OzelTshirtPage() {
  return (
        <>
    <PageHeader title="Market" />

    <CollectionPage
      title="Özel T-Shirt Koleksiyonu"
      products={ozelTshirtProducts}
    />
        </>

  );
}