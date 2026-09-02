import TextSlider from "@/components/common/other-components/TextSlider";
import Footer6 from "@/components/footers/Footer6";
import Header15 from "@/components/headers/Header15";
import Banner from "@/components/homes/home-borkha-shop/Banner";
import Categories from "@/components/homes/home-borkha-shop/Categories";
import Hero from "@/components/homes/home-borkha-shop/Hero";
import InstagramPosts from "@/components/homes/home-borkha-shop/InstagramPosts";
import Products1 from "@/components/homes/home-borkha-shop/Products1";
import Testimonials from "@/components/homes/home-borkha-shop/Testimonials";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Borkha Shop || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header15 containerClass="rbt-full-width-wrapper" sticky={true} />
      <Hero />
      <TextSlider parentClass="rbt-component-area rbt-categories-scroll-area rbt-bg-color-white" />
      <Products1 />
      <Banner />
      <Categories />
      <Testimonials />
      <InstagramPosts />
      <Footer6 />
    </>
  );
}
