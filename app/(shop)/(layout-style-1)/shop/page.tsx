import Breadcrumb from "@/components/products/Breadcrumb";
import CategoriesWider from "@/components/products/CategoriesWider";
import ShopDefault from "@/components/products/ShopDefault";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop || Transasia - Electronics Store",
  description: "Browse our complete catalog of electronics products.",
};

const pageTitle = "Shop";

export default function page() {
  return (
    <>
      <Breadcrumb containerFull title={pageTitle} />
      <CategoriesWider />
      <div className="rbt-component-area ptb--32 ptb_sm--12">
        <div className="rbt-full-width-wrapper">
          <div className="rbt-separator rbt-separator-gray200"></div>
        </div>
      </div>
      <ShopDefault containerFull wider column={4} />
    </>
  );
}
