import Features3 from "@/components/common/features/Features3";
import Footer10 from "@/components/footers/Footer10";
import Header15 from "@/components/headers/Header15";
import Categories from "@/components/homes/home-kitchen-accessories/Categories";
import Hero from "@/components/homes/home-kitchen-accessories/Hero";
import InstagramPosts from "@/components/homes/home-kitchen-accessories/InstagramPosts";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Kitchen Accessories || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header15 containerClass="rbt-full-width-wrapper" sticky={true} />
      <Hero />
      <Categories />
      <InstagramPosts />
      <Features3 parentClass="rbt-component-area rbt-quick-inf-area rbt-bg-color-white rbt-section-gap2" />
      <Footer10 />
    </>
  );
}
