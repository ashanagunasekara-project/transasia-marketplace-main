import Footer4 from "@/components/footers/Footer4";
import Header13 from "@/components/headers/Header13";
import Blogs from "@/components/homes/home-flower-plants/Blogs";
import Collections from "@/components/homes/home-flower-plants/Collections";
import Hero from "@/components/homes/home-flower-plants/Hero";
import Products1 from "@/components/homes/home-flower-plants/Products1";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Flower Plants || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header13 sticky={true} />
      <Hero />
      <Products1 />
      <Collections />
      <Blogs />
      <Footer4 />
    </>
  );
}
