import { allProducts } from "@/data/products";
import BoughtTogether from "@/components/product-details/others/BoughtTogether";
import BreadCrumb from "@/components/product-details/BreadCrumb";
import DetailsSizePopup from "@/components/product-details/details/DetailsSizePopup";
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
      <DetailsSizePopup product={product} />
      <BoughtTogether />
    </>
  );
}
