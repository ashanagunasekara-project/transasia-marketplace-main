import Features4 from "@/components/common/features/Features4";
import Footer11 from "@/components/footers/Footer11";
import Header6 from "@/components/headers/Header6";
import Blogs from "@/components/homes/home-furniture-three/Blogs";
import Categories from "@/components/homes/home-furniture-three/Categories";
import Hero from "@/components/homes/home-furniture-three/Hero";
import Products1 from "@/components/homes/home-furniture-three/Products1";
import Products2 from "@/components/homes/home-furniture-three/Products2";
import VideoBanner from "@/components/homes/home-furniture-three/VideoBanner";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Furniture 03 || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header6 sticky={true} />
      <Hero />
      <Categories />
      <Products1 />
      <VideoBanner />
      <Products2 />
      <Features4 />
      <Blogs />
      <Footer11 discountSlider={true} />
    </>
  );
}
