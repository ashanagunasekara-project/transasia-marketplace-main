import BottomStickyProduct from "@/components/product-details/others/BottomStickyProduct";
import { allProducts } from "@/data/products";

import DetailsAccessories from "@/components/product-details/details/DetailsAccessories";
import Description2 from "@/components/product-details/descriptions/Description2";
import VideoReview from "@/components/product-details/others/VideoReview";
import CompareSimilerItems from "@/components/product-details/compares/CompareSimilerItems";
import BoughtTogether from "@/components/product-details/others/BoughtTogether3";
import { accessoryCompareProducts } from "@/data/products/others";
import Footer1 from "@/components/footers/Footer1";
import BreadCrumb from "@/components/product-details/BreadCrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Details || Transasia - Electronics Store",
  description: "Transasia Electronics Store - High quality electronics and gadgets.",
};

import { fetchStorefrontProductByIdOrSlug } from "@/lib/api";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const liveProduct = await fetchStorefrontProductByIdOrSlug(id);
  const product =
    liveProduct ||
    allProducts.find((p) => String(p.id) === id) ||
    allProducts[0];
  return (
    <>
      <BreadCrumb product={product} />
      <DetailsAccessories product={product} />
      <Description2 product={product} />
      <VideoReview />
      <CompareSimilerItems products={accessoryCompareProducts} />
      <BoughtTogether />
      <BottomStickyProduct product={product} />
      <Footer1 />
    </>
  );
}
