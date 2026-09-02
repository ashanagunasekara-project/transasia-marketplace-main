import TextSlider from "@/components/common/other-components/TextSlider";
import Footer7 from "@/components/footers/Footer7";
import Header15 from "@/components/headers/Header15";
import Categories from "@/components/homes/home-shocks-store/Categories";
import Hero from "@/components/homes/home-shocks-store/Hero";
import InstagramPosts from "@/components/homes/home-shocks-store/InstagramPosts";
import Products1 from "@/components/homes/home-shocks-store/Products1";
import Testimonials from "@/components/homes/home-shocks-store/Testimonials";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Shocks || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header15 sticky={true} />
      <Hero />
      <TextSlider parentClass="rbt-component-area rbt-categories-scroll-area rbt-bg-color-white" />
      <Products1 />
      <Categories />
      <Testimonials />
      <InstagramPosts />
      <Footer7 />
    </>
  );
}
