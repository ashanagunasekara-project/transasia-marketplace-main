import Banner from "@/components/products/Banner";
import Breadcrumb from "@/components/products/Breadcrumb";
import Categories from "@/components/products/Categories";
import ShopDefault from "@/components/products/ShopDefault";

import { fetchStorefrontProducts } from "@/lib/api";

import { Metadata } from "next";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Shop By Categories || Transasia - Electronics Store",
  description: "Browse electronics products by categories at Transasia.",
};

export default async function page() {
  const products = await fetchStorefrontProducts();

  return (
    <>
      <Breadcrumb title="Shop By Categories" />
      <Banner />
      <Categories />
      <div className="rbt-component-area ptb--32 ptb_sm--12">
        <div className="container">
          <div className="rbt-separator rbt-separator-gray200" />
        </div>
      </div>
      <ShopDefault products={products} column={3} />
    </>
  );
}
