import Footer10 from "@/components/footers/Footer10";
import BottomStickyProduct from "@/components/product-details/others/BottomStickyProduct";
import CompareSimilerItems from "@/components/product-details/compares/CompareSimilerItems";
import { allProducts } from "@/data/products";
import DetailsLaggageBag from "@/components/product-details/details/DetailsLaggageBag";
import Description4 from "@/components/product-details/descriptions/Description4";
import { luggageCompareProducts } from "@/data/products/others";
import BreadCrumb from "@/components/product-details/BreadCrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Product Single Laggage Bag || Unimart - eCommerce React Nextjs Bootstrap5 Template",
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
      <DetailsLaggageBag product={product} />
      <Description4 />
      <CompareSimilerItems products={luggageCompareProducts} />

      <BottomStickyProduct />
      <Footer10 />
    </>
  );
}
