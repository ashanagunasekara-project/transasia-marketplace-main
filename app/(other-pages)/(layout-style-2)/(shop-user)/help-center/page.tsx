import HelpLinks from "@/components/other-pages/shop-user/HelpLinks";
import HelpFaqs from "@/components/other-pages/shop-user/HelpFaqs";
import HelpBlogs from "@/components/other-pages/shop-user/HelpBlogs";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Browse Unimart help topics, FAQs, and guides.",
};

export default function page() {
  return (
    <>
      <HelpLinks />
      <HelpFaqs />
      <HelpBlogs />
    </>
  );
}
