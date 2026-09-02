import Features from "@/components/common/features/Features";
import Footer4 from "@/components/footers/Footer4";
import Header15 from "@/components/headers/Header15";
import Banner from "@/components/homes/home-furniture/Banner";
import Blogs from "@/components/homes/home-furniture/Blogs";
import Categories from "@/components/homes/home-furniture/Categories";
import Hero from "@/components/homes/home-furniture/Hero";
import Lookbook from "@/components/homes/home-furniture/Lookbook";
import Products from "@/components/homes/home-furniture/Products";
import Products2 from "@/components/homes/home-furniture/Products2";
import Products3 from "@/components/homes/home-furniture/Products3";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Furniture || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header15 sticky={true} />
      <Hero />
      <Categories />
      <Products />
      <Banner />
      <Products2 />
      <Lookbook />
      <Products3 />
      <Blogs />
      <Features />
      <Footer4 />
    </>
  );
}
