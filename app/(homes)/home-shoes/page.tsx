import Features7 from "@/components/homes/home-shoes/Features7";
import TextSlider from "@/components/common/other-components/TextSlider";
import Footer2 from "@/components/footers/Footer2";
import Header11 from "@/components/headers/Header11";
import Banner from "@/components/homes/home-shoes/Banner";
import Categories from "@/components/homes/home-shoes/Categories";
import Hero from "@/components/homes/home-shoes/Hero";
import InstagramPosts from "@/components/homes/home-shoes/InstagramPosts";
import Products1 from "@/components/homes/home-shoes/Products1";
import Testimonials from "@/components/homes/home-shoes/Testimonials";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Shoes || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header11 sticky={true} />
      <Hero />
      <TextSlider parentClass="rbt-component-area rbt-categories-scroll-area rbt-bg-color-white mt--40" />
      <Categories />
      <Products1 />
      <Banner />
      <Testimonials />
      <Features7 />
      <InstagramPosts />
      <Footer2 />
    </>
  );
}
