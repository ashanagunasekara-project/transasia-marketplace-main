import Footer4 from "@/components/footers/Footer4";
import Header10 from "@/components/headers/Header10";
import Banner from "@/components/homes/home-straller/Banner";
import Banner2 from "@/components/homes/home-straller/Banner2";
import Blogs from "@/components/homes/home-straller/Blogs";
import Hero from "@/components/homes/home-straller/Hero";
import Products1 from "@/components/homes/home-straller/Products1";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Stroller || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header10 sticky={true} />
      <Hero />
      <Products1 />
      <Banner />
      <Banner2 />
      <Blogs />
      <Footer4 />
    </>
  );
}
