import Banner from "@/components/products/Banner";
import Breadcrumb from "@/components/products/Breadcrumb";
import CategoriesWider from "@/components/products/CategoriesWider";
import ShopDefault from "@/components/products/ShopDefault";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Shop Wider Six || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};

const pageTitle = "Shop Wider Six";

export default function page() {
  return (
    <>
      <Breadcrumb containerFull title={pageTitle} />
      <Banner containerFull />
      <CategoriesWider />
      <div className="rbt-component-area ptb--32 ptb_sm--12">
        <div className="rbt-full-width-wrapper">
          <div className="rbt-separator rbt-separator-gray200"></div>
        </div>
      </div>
      <ShopDefault containerFull wider column={6} />
    </>
  );
}
