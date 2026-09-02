import Brands from "@/components/common/other-components/Brands2";
import Footer11 from "@/components/footers/Footer11";
import Header6 from "@/components/headers/Header6";
import Banner from "@/components/homes/home-electronics-three/Banner";
import Categories from "@/components/homes/home-electronics-three/Categories";
import Hero from "@/components/homes/home-electronics-three/Hero";
import Products1 from "@/components/homes/home-electronics-three/Products1";
import Testimonials from "@/components/homes/home-electronics-three/Testimonials";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Electronics 03 || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header6 sticky={true} />
      <Hero />
      <Categories />
      <Products1 productSectionSpace="pt--0" />
      <Banner />
      <Testimonials />
      <Brands parentClass="rbt-component-area rbt-section-gap" />
      <Footer11 discountSlider={true} />
    </>
  );
}
