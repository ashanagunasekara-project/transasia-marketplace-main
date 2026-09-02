import BreadcrumbInner from "@/components/common/other-components/BreadcrumbInner";
import Categories2 from "@/components/products/Categories2";
import ShopDefault from "@/components/products/ShopDefault";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Shop Small Categories || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};

export default function page() {
  return (
    <>
      <BreadcrumbInner title="Shop Small Categories" />

      <Categories2 />
      <div className="rbt-component-area ptb--32 ptb_sm--12">
        <div className="container">
          <div className="rbt-separator rbt-separator-gray200" />
        </div>
      </div>
      <ShopDefault />
    </>
  );
}
