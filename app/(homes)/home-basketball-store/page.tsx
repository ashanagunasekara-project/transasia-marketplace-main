import Footer6 from "@/components/footers/Footer6";
import Header7 from "@/components/headers/Header7";
import Categories from "@/components/homes/home-basketball-store/Categories";
import Hero from "@/components/homes/home-basketball-store/Hero";
import InstagramPosts from "@/components/homes/home-basketball-store/InstagramPosts";
import Products1 from "@/components/homes/home-basketball-store/Products1";
import Testimonials from "@/components/homes/home-basketball-store/Testimonials";
import VideoBanner from "@/components/homes/home-basketball-store/VideoBanner";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Basketball Store || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header7 sticky={true} />
      <Hero />
      <Categories />
      <Products1 />
      <VideoBanner />
      <Testimonials />
      <InstagramPosts />
      <Footer6 />
    </>
  );
}
