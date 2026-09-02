import Brands from "@/components/common/other-components/Brands2";
import Footer2 from "@/components/footers/Footer2";
import Header6 from "@/components/headers/Header6";
import Banner from "@/components/homes/home-beard-oil/Banner";
import Collections from "@/components/homes/home-beard-oil/Collections";
import Hero from "@/components/homes/home-beard-oil/Hero";
import Products1 from "@/components/homes/home-beard-oil/Products1";
import Testimonials from "@/components/homes/home-beard-oil/Testimonials";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Beard Oil || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header6 sticky={true} />
      <Hero />
      <Products1 />
      <Banner />
      <Collections />
      <Testimonials />
      <Brands />
      <Footer2 />
    </>
  );
}
