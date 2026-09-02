import Contact from "@/components/other-pages/faq/Contact";
import Faqs from "@/components/other-pages/faq/Faqs";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ Page 01 || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description:
    "Frequently asked questions and contact information for Unimart.",
};

export default function page() {
  return (
    <>
      <Faqs />
      <Contact />
    </>
  );
}
