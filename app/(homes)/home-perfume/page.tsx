import Footer9 from "@/components/footers/Footer9";
import Header15 from "@/components/headers/Header15";
import Banner from "@/components/homes/home-perfume/Banner";
import Blogs from "@/components/homes/home-perfume/Blogs";
import Collections from "@/components/homes/home-perfume/Collections";
import Hero from "@/components/homes/home-perfume/Hero";
import Products1 from "@/components/homes/home-perfume/Products1";
import Testimonials from "@/components/homes/home-perfume/Testimonials";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Perfume || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header15 containerClass="rbt-full-width-wrapper" sticky={true} />
      <Hero />
      <Collections />
      <Products1 />
      <Banner />
      <Testimonials />
      <Blogs />
      <Footer9 />
    </>
  );
}
