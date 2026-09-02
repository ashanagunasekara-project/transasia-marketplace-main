import Footer7 from "@/components/footers/Footer7";
import Header15 from "@/components/headers/Header15";
import Banner from "@/components/homes/home-tech-accessories/Banner";
import Categories from "@/components/homes/home-tech-accessories/Categories";
import Features from "@/components/homes/home-tech-accessories/Features";
import Hero from "@/components/homes/home-tech-accessories/Hero";
import Products1 from "@/components/homes/home-tech-accessories/Products1";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Tech Accessories || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header15 containerClass="rbt-full-width-wrapper" sticky={true} />
      <Hero />
      <Categories />
      <Features />
      <Banner />
      <Products1 />
      <Footer7 />
    </>
  );
}
