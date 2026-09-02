import Footer7 from "@/components/footers/Footer7";
import Header16 from "@/components/headers/Header16";
import Categories from "@/components/homes/home-baby-feeds-store/Categories";
import Hero from "@/components/homes/home-baby-feeds-store/Hero";
import InstagramPosts from "@/components/homes/home-baby-feeds-store/InstagramPosts";
import Products1 from "@/components/homes/home-baby-feeds-store/Products1";
import Testimonials from "@/components/homes/home-baby-feeds-store/Testimonials";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Baby Feeds Store || Unimart - eCommerce React Nextjs Bootstrap5 Template",
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
      <InstagramPosts />
      <Footer7 />
    </>
  );
}
