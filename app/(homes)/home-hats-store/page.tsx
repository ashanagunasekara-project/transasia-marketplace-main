import TextSlider from "@/components/common/other-components/TextSlider";
import Footer7 from "@/components/footers/Footer7";
import Header17 from "@/components/headers/Header17";
import Categories from "@/components/homes/home-hats-store/Categories";
import Hero from "@/components/homes/home-hats-store/Hero";
import InstagramPosts from "@/components/homes/home-hats-store/InstagramPosts";
import Products1 from "@/components/homes/home-hats-store/Products1";
import Testimonials from "@/components/homes/home-hats-store/Testimonials";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Hats || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header17 sticky={true} />
      <Hero />
      <TextSlider parentClass="rbt-component-area rbt-categories-scroll-area rbt-bg-color-white pt--24" />
      <Products1 />
      <Categories />
      <Testimonials />
      <InstagramPosts />
      <Footer7 />
    </>
  );
}
