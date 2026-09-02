import Footer7 from "@/components/footers/Footer7";
import Header16 from "@/components/headers/Header16";
import Banner from "@/components/homes/home-cosmetic-beauty-three/Banner";
import Hero from "@/components/homes/home-cosmetic-beauty-three/Hero";
import InstagramPosts from "@/components/homes/home-cosmetic-beauty-three/InstagramPosts";
import Products1 from "@/components/homes/home-cosmetic-beauty-three/Products1";
import Testimonials from "@/components/homes/home-cosmetic-beauty-three/Testimonials";
import Categories from "@/components/homes/home-cosmetic-beauty-two/Categories";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Cosmetic Beauty 03 || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header16 sticky={true} />
      <Hero />
      <Categories sectionSpace="rbt-section-gap" />
      <Products1 />
      <Banner />
      <Testimonials sectionSpace="rbt-section-gapTop" />
      <InstagramPosts />
      <Footer7 />
    </>
  );
}
