import Footer2 from "@/components/footers/Footer2";
import Header13 from "@/components/headers/Header13";
import Banner from "@/components/homes/home-light-store/Banner";
import Categories from "@/components/homes/home-light-store/Categories";
import Hero from "@/components/homes/home-light-store/Hero";
import Products1 from "@/components/homes/home-light-store/Products1";
import Testimonials from "@/components/homes/home-light-store/Testimonials";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Light Store || Unimart - eCommerce React Nextjs Bootstrap5 Template",
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
      <Testimonials />
      <Footer2 />
    </>
  );
}
