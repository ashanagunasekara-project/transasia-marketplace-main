import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import Banner from "@/components/homes/home-furniture-two/Banner";
import Blogs from "@/components/homes/home-furniture-two/Blogs";
import Brands from "@/components/homes/home-furniture-two/Brands";
import Categories from "@/components/homes/home-furniture-two/Categories";
import Hero from "@/components/homes/home-furniture-two/Hero";
import Lookbook from "@/components/homes/home-furniture-two/Lookbook";
import Products1 from "@/components/homes/home-furniture-two/Products1";
import Products2 from "@/components/homes/home-furniture-two/Products2";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Furniture 02 || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header1 sticky={true} />
      <Hero />
      <Categories />
      <Products1 />
      <Banner />
      <Brands />
      <Products2 />
      <Lookbook />
      <Blogs />
      <Footer2 />
    </>
  );
}
