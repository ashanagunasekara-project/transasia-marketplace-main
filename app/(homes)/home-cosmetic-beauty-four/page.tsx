import VideosSection from "@/components/common/other-components/VideosSection";
import Footer11 from "@/components/footers/Footer11";
import Header15 from "@/components/headers/Header15";
import Banner from "@/components/homes/home-cosmetic-beauty-four/Banner";
import Brands from "@/components/homes/home-cosmetic-beauty-four/Brands";
import Categories from "@/components/homes/home-cosmetic-beauty-four/Categories";
import Hero from "@/components/homes/home-cosmetic-beauty-four/Hero";
import InstagramPosts from "@/components/homes/home-cosmetic-beauty-four/InstagramPosts";
import Products1 from "@/components/homes/home-cosmetic-beauty-four/Products1";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Cosmetic Beauty 04 || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header15 containerClass="rbt-full-width-wrapper" sticky={true} />
      <Hero />
      <Categories />
      <Products1 />
      <Banner />
      <VideosSection />
      <Brands />
      <InstagramPosts />
      <Footer11 cosmeticBg="/assets/images/footer/banner-image3a.png" />
    </>
  );
}
