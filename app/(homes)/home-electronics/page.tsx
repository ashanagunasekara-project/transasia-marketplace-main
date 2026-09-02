import Header2 from "@/components/headers/Header2";
import Products2 from "@/components/homes/home-electronics/Products2";
import Categories from "@/components/homes/home-electronics/Categories";
import Hero from "@/components/homes/home-electronics/Hero";
import Products from "@/components/homes/home-electronics/Products";
import Products3 from "@/components/homes/home-electronics/Products3";
import Products4 from "@/components/homes/home-electronics/Products4";
import Brands from "@/components/homes/home-electronics/Brands";
import Banner from "@/components/homes/home-electronics/Banner";
import Footer1 from "@/components/footers/Footer1";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Electronics 01 || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header2 sticky={true} />
      <Hero />
      <Categories />
      <Products />
      <Products2 />
      <Products3 />
      <Products4 />
      <Brands />
      <Banner />
      <Footer1 />
    </>
  );
}
