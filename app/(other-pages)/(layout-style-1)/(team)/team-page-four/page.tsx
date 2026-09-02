import Contact from "@/components/other-pages/team/Contact";
import Team4 from "@/components/other-pages/team/Team4";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team Page 04 || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Fourth team page layout with team and contact section.",
};

export default function page() {
  return (
    <>
      <Team4 />
      <Contact />
    </>
  );
}
