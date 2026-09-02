import Breadcrumb from "@/components/common/other-components/Breadcrumb";

import CompareProducts4 from "@/components/product-details/compares/CompareProducts4";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Compare Product || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};

const pageTitle = "Compare Product";

export default function page() {
  return (
    <>
      <Breadcrumb title={pageTitle} subtitle="Shop" />
      <CompareProducts4 />
    </>
  );
}
