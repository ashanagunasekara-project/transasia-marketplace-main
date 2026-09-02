import Footer4 from "@/components/footers/Footer4";
import Header6 from "@/components/headers/Header6";
import Hero from "@/components/homes/home-book-store/Hero";
import Products1 from "@/components/homes/home-book-store/Products1";
import Products2 from "@/components/homes/home-book-store/Products2";
import Products3 from "@/components/homes/home-book-store/Products3";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Book Store || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header6 sticky={true} />
      <Hero />
      <Products1 />
      <Products2 />
      <Products3 />
      <Footer4 />
    </>
  );
}
