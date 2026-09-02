import Features3 from "@/components/common/features/Features3";
import Footer7 from "@/components/footers/Footer7";
import Header6 from "@/components/headers/Header6";
import Banner from "@/components/homes/home-tennis-accessories/Banner";
import Hero from "@/components/homes/home-tennis-accessories/Hero";
import Products1 from "@/components/homes/home-tennis-accessories/Products1";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Tennis Accessories || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header6 sticky={true} />
      <Hero />
      <Products1 />
      <Banner />
      <Features3 parentClass="rbt-component-area rbt-quick-inf-area rbt-bg-color-white rbt-section-gap2" />
      <Footer7 />
    </>
  );
}
