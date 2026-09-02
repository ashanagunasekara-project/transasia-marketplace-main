import Features5 from "@/components/common/features/Features5";
import Footer7 from "@/components/footers/Footer7";
import Header12 from "@/components/headers/Header12";
import Banner from "@/components/homes/home-ladies-bag/Banner";
import Categories from "@/components/homes/home-ladies-bag/Categories";
import Hero from "@/components/homes/home-ladies-bag/Hero";
import InstagramPosts from "@/components/homes/home-ladies-bag/InstagramPosts";
import Products1 from "@/components/homes/home-ladies-bag/Products1";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Ladies Bag || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header12 sticky={true} />
      <Hero />
      <Categories />
      <Features5 />
      <Products1 />
      <Banner />
      <InstagramPosts />
      <Footer7 />
    </>
  );
}
