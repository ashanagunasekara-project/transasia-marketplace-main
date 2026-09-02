import Terms from "@/components/other-pages/privacy/Terms";
import Socials from "@/components/other-pages/privacy/Socials";
import BreadcrumbInner from "@/components/common/other-components/BreadcrumbInner";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Terms & Policy || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Read the terms and policies for using the Unimart store.",
};

export default function page() {
  return (
    <>
      <BreadcrumbInner title="Terms & Policy" />
      <Terms />
      <Socials />
    </>
  );
}
