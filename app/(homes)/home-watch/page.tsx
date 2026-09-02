import TextSlider from "@/components/common/other-components/TextSlider";
import Footer6 from "@/components/footers/Footer6";
import Header9 from "@/components/headers/Header9";
import Banner from "@/components/homes/home-watch/Banner";
import Hero from "@/components/homes/home-watch/Hero";
import InstagramPosts from "@/components/homes/home-watch/InstagramPosts";
import Products from "@/components/homes/home-watch/Products";
import Testimonials from "@/components/homes/home-watch/Testimonials";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Watch || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header9 sticky={true} />
      <Hero />
      <TextSlider parentClass="rbt-component-area rbt-categories-scroll-area rbt-bg-color-white" />
      <Products />
      <Banner />
      <Testimonials />
      <InstagramPosts />
      <Footer6 />
    </>
  );
}
