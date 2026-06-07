import CollectionPage from "@/components/market/collectionpage";
import PageHeader from "@/components/layout/header";
import { efsanelerProducts } from "@/data/efsanelerProducts";

export default function EfsanelerPage() {
  return (
   <>
  <PageHeader title="Market" />

  <CollectionPage
    title="Efsaneler Özel Koleksiyonu"
    products={efsanelerProducts}
  />
</>
  );
}