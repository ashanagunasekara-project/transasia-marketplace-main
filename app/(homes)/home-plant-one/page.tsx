import Header13 from "@/components/headers/Header13";
import Hero from "@/components/homes/home-plant-one/Hero";
import Categories from "@/components/homes/home-plant-one/Categories";
import Products1 from "@/components/homes/home-plant-one/Products1";
import Banner from "@/components/homes/home-plant-one/Banner";
import Features from "@/components/homes/home-plant-one/Features";
import Blogs from "@/components/homes/home-plant-one/Blogs";
import Footer7 from "@/components/footers/Footer7";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Plant One || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header13 sticky={true} />
      <Hero />
      <Categories />
      <Products1 />
      <Banner />
      <Features parentClass="rbt-quick-inf-area-border" />
      <Blogs />
      <Footer7 />
    </>
  );
}
