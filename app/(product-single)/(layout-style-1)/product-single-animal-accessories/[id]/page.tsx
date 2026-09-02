import BottomStickyProduct from "@/components/product-details/others/BottomStickyProduct";
import { allProducts } from "@/data/products";
import DetailsPetAccessories from "@/components/product-details/details/DetailsPetAccessories";
import BoughtTogether4 from "@/components/product-details/others/BoughtTogether4";
import Description4 from "@/components/product-details/descriptions/Description4";
import BreadCrumb from "@/components/product-details/BreadCrumb";
import Footer10 from "@/components/footers/Footer10";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Product Single Animal Accessories || Unimart - eCommerce React Nextjs Bootstrap5 Template",
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
      <DetailsPetAccessories product={product} />
      <Description4 />
      <BoughtTogether4 />
      <BottomStickyProduct />
      <Footer10 />
    </>
  );
}
