import BottomStickyProduct from "@/components/product-details/others/BottomStickyProduct";
import { allProducts } from "@/data/products";
import DetailsPhonCase from "@/components/product-details/details/DetailsPhonCase";
import SimillerProducts5 from "@/components/product-details/others/SimillerProducts5";
import BoughtTogether3 from "@/components/product-details/others/BoughtTogether3";
import BreadCrumb from "@/components/product-details/BreadCrumb";
import Footer10 from "@/components/footers/Footer10";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Product Single Phone Case || Unimart - eCommerce React Nextjs Bootstrap5 Template",
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
      <DetailsPhonCase product={product} />
      <SimillerProducts5 />
      <BoughtTogether3 />
      <BottomStickyProduct />

      <Footer10 />
    </>
  );
}
