import Breadcrumb from "@/components/products/Breadcrumb";
import CategoriesWider from "@/components/products/CategoriesWider";
import ShopDefault from "@/components/products/ShopDefault";
import {
  fetchStorefrontCategories,
  fetchStorefrontProducts,
} from "@/lib/api";
import { DOCUMENTATION_CATEGORIES } from "@/data/documentationCategories";
import { electronicsCardData } from "@/data/products/electronics";
import { Category } from "@/types/categories";

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

  const fallbackCategories: Category[] = DOCUMENTATION_CATEGORIES.map((c) => ({
    id: c.id,
    title: c.title,
    name: c.title,
    slug: c.slug,
    imgSrc: c.imgSrc,
    subCategories: c.subcategories.map((s) => ({
      title: s.title,
      slug: s.slug,
      href: s.href,
    })),
  }));

  const activeCategories =
    categories && categories.length > 0 ? categories : fallbackCategories;
  const activeProducts =
    products && products.length > 0 ? products : electronicsCardData;

  return (
    <>
      <Breadcrumb containerFull title={pageTitle} />
      <CategoriesWider categories={activeCategories} />
      <div className="rbt-component-area ptb--32 ptb_sm--12">
        <div className="rbt-full-width-wrapper">
          <div className="rbt-separator rbt-separator-gray200"></div>
        </div>
      </div>
      <ShopDefault products={activeProducts} containerFull wider column={4} />
    </>
  );
}

