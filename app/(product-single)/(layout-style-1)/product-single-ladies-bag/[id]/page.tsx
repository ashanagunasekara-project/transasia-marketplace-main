import Footer10 from "@/components/footers/Footer10";
import BottomStickyProduct from "@/components/product-details/others/BottomStickyProduct";
import CompareSimilerItems from "@/components/product-details/compares/CompareSimilerItems";
import { allProducts } from "@/data/products";
import DetailsLediesBag from "@/components/product-details/details/DetailsLediesBag";
import SimillerProducts6 from "@/components/product-details/others/SimillerProducts6";
import { fashionCompareProducts } from "@/data/products/others";
import BreadCrumb from "@/components/product-details/BreadCrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Product Single Ladies Bag || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product =
    allProducts.filter((p) => p.id === parseInt(id))[0] || allProducts[0];
  return (
    <>
      <BreadCrumb product={product} />
      <DetailsLediesBag product={product} />
      <CompareSimilerItems products={fashionCompareProducts} />
      <SimillerProducts6 />
      <BottomStickyProduct />
      <Footer10 />
    </>
  );
}
