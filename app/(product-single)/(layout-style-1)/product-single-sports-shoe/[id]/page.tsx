import BottomStickyProduct from "@/components/product-details/others/BottomStickyProduct";
import { allProducts } from "@/data/products";
import DetailsSportsShoe from "@/components/product-details/details/DetailsSportsShoe";
import BoughtTogether5 from "@/components/product-details/others/BoughtTogether5";
import Footer10 from "@/components/footers/Footer10";
import BreadCrumb from "@/components/product-details/BreadCrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Product Single Sports Shoe || Unimart - eCommerce React Nextjs Bootstrap5 Template",
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
      <DetailsSportsShoe product={product} />
      <BoughtTogether5 />
      <BottomStickyProduct />
      <Footer10 />
    </>
  );
}
