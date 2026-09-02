import CategoryBreadcrumb from "@/components/other-pages/categories/CategoryBreadcrumb";
import CategoryLinkedBoxSwiper from "@/components/other-pages/categories/CategoryLinkedBoxSwiper";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Categories Style Linked Box Swiper || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};

export default function Page() {
  return (
    <>
      <CategoryBreadcrumb
        title="Categories Style"
        highlighted="Linked Box Swiper"
      />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <CategoryLinkedBoxSwiper />
    </>
  );
}
