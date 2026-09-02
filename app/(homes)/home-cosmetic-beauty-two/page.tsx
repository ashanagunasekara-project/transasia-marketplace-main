import Footer7 from "@/components/footers/Footer7";
import Header13 from "@/components/headers/Header13";
import Banner from "@/components/homes/home-cosmetic-beauty-two/Banner";
import Categories from "@/components/homes/home-cosmetic-beauty-two/Categories";
import Hero from "@/components/homes/home-cosmetic-beauty-two/Hero";
import InstagramPosts from "@/components/homes/home-cosmetic-beauty-two/InstagramPosts";
import Products1 from "@/components/homes/home-cosmetic-beauty-two/Products1";
import VideosSection from "@/components/common/other-components/VideosSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Cosmetic Beauty 02 || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header13 sticky={true} />
      <Hero />
      <Categories removeCircle="rounded-0" />
      <Products1 />
      <Banner />
      <VideosSection />
      <InstagramPosts />
      <Footer7 />
    </>
  );
}
