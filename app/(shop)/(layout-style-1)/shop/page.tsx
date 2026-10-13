import Breadcrumb from "@/components/products/Breadcrumb";
import CategoriesWider from "@/components/products/CategoriesWider";
import ShopDefault from "@/components/products/ShopDefault";
import {
  fetchStorefrontCategories,
  fetchStorefrontProducts,
} from "@/lib/api";

import { Metadata } from "next";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Shop || Transasia - Electronics Store",
  description: "Browse our complete catalog of electronics products.",
};

const pageTitle = "Shop";

export default async function page() {
  const [products, categories] = await Promise.all([
    fetchStorefrontProducts(),
    fetchStorefrontCategories(),
  ]);

  return (
    <>
      <Breadcrumb containerFull title={pageTitle} />
      <CategoriesWider categories={categories} />
      <div className="rbt-component-area ptb--32 ptb_sm--12">
        <div className="rbt-full-width-wrapper">
          <div className="rbt-separator rbt-separator-gray200"></div>
        </div>
      </div>
      <ShopDefault products={products} containerFull wider column={4} />
    </>
  );
}

