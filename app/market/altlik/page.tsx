import CollectionPage from "@/components/market/collectionpage";
import PageHeader from "@/components/layout/header";
import { altlikProducts } from "@/data/altlik";

export default function AltlikPage() {
  return (
    <>
    <PageHeader title="Market" />
    <CollectionPage
      title="Altlık Koleksiyonu"
      products={altlikProducts}
    />
    </>
  );
}