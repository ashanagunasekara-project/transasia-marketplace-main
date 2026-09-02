import BreadcrumbInner from "@/components/common/other-components/BreadcrumbInner";
import Contact2 from "@/components/other-pages/faq/Contact2";
import Faqs2 from "@/components/other-pages/faq/Faqs2";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ Page 02 || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "More Unimart questions answered plus ways to get in touch.",
};

export default function page() {
  return (
    <>
      <BreadcrumbInner title="FAQ" />
      <Faqs2 />
      <Contact2 />
    </>
  );
}
