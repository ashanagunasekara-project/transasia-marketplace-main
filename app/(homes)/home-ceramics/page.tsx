import Footer7 from "@/components/footers/Footer7";
import Header15 from "@/components/headers/Header15";
import Categories from "@/components/homes/home-ceramics/Categories";
import Hero from "@/components/homes/home-ceramics/Hero";
import Lookbook from "@/components/homes/home-ceramics/Lookbook";
import Products1 from "@/components/homes/home-ceramics/Products1";
import Testimonials from "@/components/homes/home-ceramics/Testimonials";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Ceramics || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header15 containerClass="rbt-full-width-wrapper" sticky={true} />
      <Hero />
      <Categories />
      <Products1 />
      <Lookbook />
      <Testimonials />
      <Footer7 />
    </>
  );
}
