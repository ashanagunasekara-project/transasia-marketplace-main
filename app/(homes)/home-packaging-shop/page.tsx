import Footer4 from "@/components/footers/Footer4";
import Header15 from "@/components/headers/Header15";
import Blogs from "@/components/homes/home-packaging-shop/Blogs";
import Categories from "@/components/homes/home-packaging-shop/Categories";
import Hero from "@/components/homes/home-packaging-shop/Hero";
import Products1 from "@/components/homes/home-packaging-shop/Products1";
import Testimonials from "@/components/homes/home-packaging-shop/Testimonials";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Packaging Shop || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header15 containerClass="rbt-full-width-wrapper" sticky={true} />
      <Hero />
      <Categories />
      <Products1 />
      <Testimonials />
      <Blogs />
      <Footer4 />
    </>
  );
}
