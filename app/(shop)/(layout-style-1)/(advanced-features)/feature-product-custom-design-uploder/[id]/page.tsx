import BoughtTogether from "@/components/product-details/others/BoughtTogether";
import { allProducts } from "@/data/products";
import DetailsDefault from "@/components/product-details/details/DetailsDefault";
import BreadCrumb from "@/components/product-details/BreadCrumb";
import BottomStickyProduct from "@/components/product-details/others/BottomStickyProduct";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Product Single Default || Unimart - eCommerce React Nextjs Bootstrap5 Template",
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
      <DetailsDefault product={product} />
      <BoughtTogether spaceClass="rbt-section-gapBottom" />
      <BottomStickyProduct />
    </>
  );
}
