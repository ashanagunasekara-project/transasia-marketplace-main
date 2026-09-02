import Footer7 from "@/components/footers/Footer7";
import Header16 from "@/components/headers/Header16";
import Blogs from "@/components/homes/home-bakery-shop/Blogs";
import Categories from "@/components/homes/home-bakery-shop/Categories";
import Hero from "@/components/homes/home-bakery-shop/Hero";
import InstagramPosts from "@/components/homes/home-bakery-shop/InstagramPosts";
import Products1 from "@/components/homes/home-bakery-shop/Products1";
import Testimonials from "@/components/homes/home-bakery-shop/Testimonials";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Bakery Shop || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header16 sticky={true} />
      <Hero />
      <Categories />
      <Products1 />
      <Testimonials />
      <Blogs />
      <InstagramPosts />
      <Footer7 />
    </>
  );
}
