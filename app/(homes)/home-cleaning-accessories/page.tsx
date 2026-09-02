import Footer11 from "@/components/footers/Footer11";
import Header6 from "@/components/headers/Header6";
import Banner from "@/components/homes/home-cleaning-accessories/Banner";
import Blogs from "@/components/homes/home-cleaning-accessories/Blogs";
import Categories from "@/components/homes/home-cleaning-accessories/Categories";
import Hero from "@/components/homes/home-cleaning-accessories/Hero";
import Products1 from "@/components/homes/home-cleaning-accessories/Products1";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Cleaning Accessories || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header6 sticky={true} />
      <Hero />
      <Categories />
      <Products1 />
      <Banner />
      <Blogs />
      <Footer11 />
    </>
  );
}
