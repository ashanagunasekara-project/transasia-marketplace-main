import Footer5 from "@/components/footers/Footer5";
import Header16 from "@/components/headers/Header16";
import Banner from "@/components/homes/home-laggage-bag/Banner";
import Blogs from "@/components/homes/home-laggage-bag/Blogs";
import Categories from "@/components/homes/home-laggage-bag/Categories";
import Hero from "@/components/homes/home-laggage-bag/Hero";
import Products1 from "@/components/homes/home-laggage-bag/Products1";
import VideosSection from "@/components/homes/home-laggage-bag/VideosSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Luggage Bag || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header16 sticky={true} />
      <Hero />
      <Categories />
      <Products1 />
      <Banner />
      <VideosSection />
      <Blogs />
      <Footer5 />
    </>
  );
}
