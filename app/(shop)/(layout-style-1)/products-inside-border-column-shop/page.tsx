import Banner from "@/components/products/Banner";
import Breadcrumb from "@/components/products/Breadcrumb";
import Categories from "@/components/products/Categories";
import Shop2 from "@/components/products/Shop2";

const pageTitle = "Products Inside Border Column Shop";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${pageTitle} || Unimart - eCommerce React Nextjs Bootstrap5 Template`,
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};

export default function page() {
  return (
    <>
      <Breadcrumb title={pageTitle} />
      <Banner />
      <Categories />
      <div className="rbt-component-area ptb--32 ptb_sm--12">
        <div className="container">
          <div className="rbt-separator rbt-separator-gray200" />
        </div>
      </div>
      <Shop2 />
    </>
  );
}
