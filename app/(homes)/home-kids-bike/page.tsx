import Features4 from "@/components/common/features/Features4";
import Footer11 from "@/components/footers/Footer11";
import Header6 from "@/components/headers/Header6";
import Banner from "@/components/homes/home-kids-bike/Banner";
import Blogs from "@/components/homes/home-kids-bike/Blogs";
import Categories from "@/components/homes/home-kids-bike/Categories";
import Hero from "@/components/homes/home-kids-bike/Hero";
import Products1 from "@/components/homes/home-kids-bike/Products1";
import TextSlider from "@/components/homes/home-kids-bike/TextSlider";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Kids Bike || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header6 sticky={true} />
      <Hero />
      <Categories />
      <Products1 />
      <Banner />
      <Features4 />
      <Blogs />
      <TextSlider />
      <Footer11 />
    </>
  );
}
