import Features4 from "@/components/common/features/Features4";
import TextSlider from "@/components/common/other-components/TextSlider";
import Footer4 from "@/components/footers/Footer4";
import Header15 from "@/components/headers/Header15";
import Banner from "@/components/homes/home-kids-toys/Banner";
import Categories from "@/components/homes/home-kids-toys/Categories";
import Hero from "@/components/homes/home-kids-toys/Hero";
import Products1 from "@/components/homes/home-kids-toys/Products1";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Kids Toys || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header15 containerClass="rbt-full-width-wrapper" sticky={true} />
      <Hero />
      <TextSlider parentClass="rbt-component-area rbt-categories-scroll-area rbt-bg-color-white mt--40" />
      <Categories />
      <Products1 />
      <Banner />
      <Features4 parentClass="rbt-component-area rbt-quick-inf-area rbt-bg-color-white rbt-section-gapBottom" />
      <Footer4 />
    </>
  );
}
