import Footer10 from "@/components/footers/Footer10";

import BottomStickyProduct from "@/components/product-details/others/BottomStickyProduct";

import DetailsFashion from "@/components/product-details/details/DetailsFashion";
import { allProducts } from "@/data/products";

import Description2 from "@/components/product-details/descriptions/Description2";
import SimmilerProducts2 from "@/components/product-details/others/SimmilerProducts2";
import BoughtTogether2 from "@/components/product-details/others/BoughtTogether2";
import CompareSimilerItems from "@/components/product-details/compares/CompareSimilerItems";
import { apparelCompareProducts } from "@/data/products/others";
import BreadCrumb from "@/components/product-details/BreadCrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Product Single Fashion || Unimart - eCommerce React Nextjs Bootstrap5 Template",
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
      <DetailsFashion product={product} />
      <Description2 />
      <CompareSimilerItems products={apparelCompareProducts} />
      <SimmilerProducts2 />
      <BoughtTogether2 />
      <BottomStickyProduct />

      <Footer10 />
    </>
  );
}
