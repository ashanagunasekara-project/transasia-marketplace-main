import Features2 from "@/components/homes/home-printing-service/Features2";
import Footer5 from "@/components/footers/Footer5";
import Header5 from "@/components/headers/Header5";
import Banner from "@/components/homes/home-printing-service/Banner";
import Categories from "@/components/homes/home-printing-service/Categories";
import Features1 from "@/components/homes/home-printing-service/Features";
import Hero from "@/components/homes/home-printing-service/Hero";
import Lookbook from "@/components/homes/home-printing-service/Lookbook";
import Products1 from "@/components/homes/home-printing-service/Products1";
import Products2 from "@/components/homes/home-printing-service/Products2";
import TextSlider from "@/components/common/other-components/TextSlider";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Printing Service || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header5 sticky={true} />
      <Hero />
      <TextSlider />
      <Categories />
      <Products1 />
      <Features1 />
      <Products2 />
      <Lookbook />
      <Banner />
      <Features2 justifyCenter />
      <Footer5 />
    </>
  );
}
