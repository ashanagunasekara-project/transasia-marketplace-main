import Breadcrumb from "@/components/common/other-components/Breadcrumb";
import Categories3 from "@/components/products/Categories3";
import { fetchStorefrontCategories } from "@/lib/api";
import { Metadata } from "next";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Categories List || Transasia - Electronics Store",
  description: "Browse all electronics product categories and subcategories at Transasia.",
};

export default async function CategoriesListPage() {
  const categories = await fetchStorefrontCategories({ onlyParents: true });

  return (
    <>
      <Breadcrumb
        className="rbt-breadcrumb-two rbt-bg-color-gray-light"
        subtitle=""
        hasHrLine
        title="Categories List"
      />
      <Categories3 initialCategories={categories} />
    </>
  );
}
