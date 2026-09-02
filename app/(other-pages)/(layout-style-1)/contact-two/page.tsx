import Contact2 from "@/components/other-pages/contact/Contact2";
import ContactMap from "@/components/other-pages/contact/ContactMap";
import Locations from "@/components/other-pages/contact/Locations";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact Us 02 || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Alternate contact layout with locations and map for Unimart.",
};

export default function page() {
  return (
    <>
      <ContactMap />
      <Locations />
      <Contact2 />
    </>
  );
}
