import Footer5 from "@/components/footers/Footer5";
import Header15 from "@/components/headers/Header15";
import Banner from "@/components/homes/home-bedding-shop/Banner";
import Hero from "@/components/homes/home-bedding-shop/Hero";
import Lookbook from "@/components/homes/home-bedding-shop/Lookbook";
import Products1 from "@/components/homes/home-bedding-shop/Products1";
import Testimonials from "@/components/homes/home-bedding-shop/Testimonials";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Bedding Shop || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header15 containerClass="rbt-full-width-wrapper" sticky={true} />
      <Hero />
      <Banner />
      <Products1 />
      <Lookbook />
      <Testimonials />
      <Footer5 />
    </>
  );
}
