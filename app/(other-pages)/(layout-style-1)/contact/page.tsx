import Breadcrumb from "@/components/other-pages/Breadcrumb";
import Contact from "@/components/other-pages/contact/Contact";
import ContactMap from "@/components/other-pages/contact/ContactMap";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Get in touch with the Unimart team via our contact page.",
};

export default function page() {
  return (
    <>
      <Breadcrumb />
      <Contact />
      <ContactMap />
    </>
  );
}
