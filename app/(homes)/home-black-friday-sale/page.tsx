import Header13 from "@/components/headers/Header13";
import Banner from "@/components/homes/home-black-friday-sale/Banner";
import Banner2 from "@/components/homes/home-black-friday-sale/Banner2";
import Hero from "@/components/homes/home-black-friday-sale/Hero";
import Products1 from "@/components/homes/home-black-friday-sale/Products1";
import TextSlider from "@/components/homes/home-black-friday-sale/TextSlider";
import Features from "@/components/common/features/Features6";

import Footer2 from "@/components/footers/Footer2";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Black Friday Sale || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <div className=" rbt-bg-color-dark-black">
      <Header13 sticky={true} />
      <Hero />
      <TextSlider />
      <Products1 />
      <Banner />
      <Banner2 />
      <Features
        countdownBg="bg-variation-primary"
        textColor="rbt-text-gradient-golden"
      />
      <Footer2 />
    </div>
  );
}
