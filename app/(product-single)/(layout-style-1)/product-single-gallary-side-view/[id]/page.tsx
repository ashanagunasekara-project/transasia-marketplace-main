import Footer10 from "@/components/footers/Footer10";

import BottomStickyProduct from "@/components/product-details/others/BottomStickyProduct";
import { allProducts } from "@/data/products";

import DetailsSingleSlideView from "@/components/product-details/details/DetailsSingleSlideView";
import Description4 from "@/components/product-details/descriptions/Description4";
import RemainingPopup from "@/components/modals/RemainingPopup";
import CartToaster from "@/components/modals/CartToaster";
import BreadCrumb from "@/components/product-details/BreadCrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Product Single Side View || Unimart - eCommerce React Nextjs Bootstrap5 Template",
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
      <DetailsSingleSlideView product={product} />
      <Description4 parentClass="rbt-component-area rbt-section-gap rbt-bg-color-gray-light pt--0" />
      <BottomStickyProduct />
      <Footer10 />
      <RemainingPopup />
      <CartToaster />
    </>
  );
}
