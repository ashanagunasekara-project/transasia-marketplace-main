import Breadcrumb from "@/components/products/Breadcrumb";
import ShopDefault from "@/components/products/ShopDefault";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Shop No Page Heading || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};

const pageTitle = "Shop No Page Heading";

export default function page() {
  return (
    <>
      <Breadcrumb title={pageTitle} />
      <ShopDefault />
    </>
  );
}
