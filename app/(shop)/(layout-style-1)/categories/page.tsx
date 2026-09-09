import Breadcrumb from "@/components/common/other-components/Breadcrumb";
import Categories3 from "@/components/products/Categories3";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories || Transasia - Electronics Store",
  description: "Browse all electronics product categories at Transasia.",
};

export default function CategoriesPage() {
  return (
    <>
      <Breadcrumb
        className="rbt-breadcrumb-two rbt-bg-color-gray-light"
        subtitle=""
        hasHrLine
        title="Categories"
      />
      <Categories3 />
    </>
  );
}
