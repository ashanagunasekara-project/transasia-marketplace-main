import Breadcrumb from "@/components/common/other-components/Breadcrumb";
import EmptyCompare from "@/components/other-pages/compare/EmptyCompare";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Compare (Empty) || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Your Unimart product compare page when no items are selected.",
};

export default function page() {
  return (
    <>
      <Breadcrumb />
      <EmptyCompare />
    </>
  );
}
