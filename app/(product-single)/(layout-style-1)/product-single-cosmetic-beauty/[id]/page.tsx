import BottomStickyProduct from "@/components/product-details/others/BottomStickyProduct";

import { allProducts } from "@/data/products";

import DetailsCosmetic from "@/components/product-details/details/DetailsCosmetic";
import Description4 from "@/components/product-details/descriptions/Description4";
import SimillerProducts4 from "@/components/product-details/others/SimillerProducts4";
import Footer7 from "@/components/footers/Footer7";
import BreadCrumb from "@/components/product-details/BreadCrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Product Single Cosmetic Beauty || Unimart - eCommerce React Nextjs Bootstrap5 Template",
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
      <DetailsCosmetic product={product} />
      <Description4 />
      <SimillerProducts4 />
      <BottomStickyProduct />

      <Footer7 />
    </>
  );
}
