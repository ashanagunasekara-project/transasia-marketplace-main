import BreadcrumbInner from "@/components/common/other-components/BreadcrumbInner";
import PortfolioDetails from "@/components/portfolios/PortfolioDetails";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Portfolio Details || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Detailed portfolio/project page layout for Unimart.",
};

export default function page() {
  return (
    <>
      <BreadcrumbInner title="Portfolio Details" />
      <PortfolioDetails />
    </>
  );
}
