import Footer7 from "@/components/footers/Footer7";
import Header15 from "@/components/headers/Header15";
import Blogs from "@/components/homes/home-coffee-store/Blogs";
import Features from "@/components/homes/home-coffee-store/Features";
import Hero from "@/components/homes/home-coffee-store/Hero";
import Lookbook from "@/components/homes/home-coffee-store/Lookbook";
import Products1 from "@/components/homes/home-coffee-store/Products1";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Coffee Store || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header15 containerClass="rbt-full-width-wrapper" sticky={true} />
      <Hero />
      <Products1 />
      <Features />
      <Lookbook />
      <Blogs />
      <Footer7 />
    </>
  );
}
