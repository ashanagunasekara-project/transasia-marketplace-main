import Brands from "@/components/common/other-components/Brands2";
import Footer2 from "@/components/footers/Footer2";
import Header11 from "@/components/headers/Header11";
import Banner from "@/components/homes/home-bike-accessories/Banner";
import Categories from "@/components/homes/home-bike-accessories/Categories";
import Collections from "@/components/homes/home-bike-accessories/Collections";
import Hero from "@/components/homes/home-bike-accessories/Hero";
import Products1 from "@/components/homes/home-bike-accessories/Products1";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Bike Accessories || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header11 sticky={true} />
      <Hero />
      <Categories />
      <Products1 />
      <Collections />
      <Banner />
      <Brands />
      <Footer2 />
    </>
  );
}
