import Footer7 from "@/components/footers/Footer7";
import Header16 from "@/components/headers/Header16";
import Hero from "@/components/homes/home-hoodie-stores-one/Hero";
import Lookbook from "@/components/homes/home-hoodie-stores-one/Lookbook";
import Products1 from "@/components/homes/home-hoodie-stores-one/Products1";
import Testimonials from "@/components/homes/home-hoodie-stores-one/Testimonials";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Hoodie Stores 01 || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header16 sticky={true} />
      <Hero />
      <Products1 />
      <Lookbook />
      <Testimonials />
      <Footer7 />
    </>
  );
}
