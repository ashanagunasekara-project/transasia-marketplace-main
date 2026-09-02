import BreadcrumbInner from "@/components/common/other-components/BreadcrumbInner";
import PrivacyPolicy from "@/components/other-pages/privacy/PrivacyPolicy";
import Socials from "@/components/other-pages/privacy/Socials";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Privacy Policy || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Understand how Unimart collects and uses your data.",
};

export default function page() {
  return (
    <>
      <BreadcrumbInner title="Privacy Policy" />
      <PrivacyPolicy />
      <Socials />
    </>
  );
}
