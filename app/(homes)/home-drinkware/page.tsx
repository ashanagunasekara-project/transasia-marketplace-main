import Features3 from "@/components/common/features/Features3";
import TextSlider from "@/components/common/other-components/TextSlider";
import Footer4 from "@/components/footers/Footer4";
import Header11 from "@/components/headers/Header11";
import Banner from "@/components/homes/home-drinkware/Banner";
import Categories from "@/components/homes/home-drinkware/Categories";
import Hero from "@/components/homes/home-drinkware/Hero";
import Products1 from "@/components/homes/home-drinkware/Products1";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Drinkware || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header11 sticky={true} />
      <Hero />
      <Categories />
      <Products1 />
      <TextSlider
        bgClass="bg-brand-50"
        parentClass="rbt-component-area rbt-categories-scroll-area rbt-bg-color-white"
      />
      <Banner />
      <Features3 parentClass="rbt-component-area rbt-quick-inf-area rbt-bg-color-white rbt-section-gap2" />
      <Footer4 />
    </>
  );
}
