import Footer2 from "@/components/footers/Footer2";
import Header15 from "@/components/headers/Header15";
import Blogs from "@/components/homes/home-cat-accessories-01/Blogs";
import Categories from "@/components/homes/home-cat-accessories-01/Categories";
import Collections from "@/components/homes/home-cat-accessories-01/Collections";
import Hero from "@/components/homes/home-cat-accessories-01/Hero";
import Products1 from "@/components/homes/home-cat-accessories-01/Products1";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Cat Accessories 01 || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header15 containerClass="rbt-full-width-wrapper" sticky={true} />
      <Hero />
      <Products1 />
      <Collections />
      <Categories />
      <Blogs />
      <Footer2 />
    </>
  );
}
