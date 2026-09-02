import BreadcrumbInner from "@/components/common/other-components/BreadcrumbInner";
import Team3 from "@/components/other-pages/team/Team3";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team Page 03 || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Third team page layout showcasing Unimart staff.",
};

export default function page() {
  return (
    <>
      <BreadcrumbInner title="Team Page Three" />
      <Team3 />
    </>
  );
}
