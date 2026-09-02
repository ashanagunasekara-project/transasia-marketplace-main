import Footer4 from "@/components/footers/Footer4";
import Header13 from "@/components/headers/Header13";
import Blogs from "@/components/homes/home-plumbing-accessories/Blogs";
import Categories from "@/components/homes/home-plumbing-accessories/Categories";
import Collections from "@/components/homes/home-plumbing-accessories/Collections";
import Hero from "@/components/homes/home-plumbing-accessories/Hero";
import Products1 from "@/components/homes/home-plumbing-accessories/Products1";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Plumbing Accessories || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header13 sticky={true} />
      <Hero />
      <Categories />
      <Products1 />
      <Collections />
      <Blogs />
      <Footer4 />
    </>
  );
}
