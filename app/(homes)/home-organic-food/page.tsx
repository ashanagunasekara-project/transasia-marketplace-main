import Features5 from "@/components/common/features/Features5";
import Footer7 from "@/components/footers/Footer7";
import Header12 from "@/components/headers/Header12";
import Banner from "@/components/homes/home-organic-food/Banner";
import Blogs from "@/components/homes/home-organic-food/Blogs";
import Categories from "@/components/homes/home-organic-food/Categories";
import Hero from "@/components/homes/home-organic-food/Hero";
import Products1 from "@/components/homes/home-organic-food/Products1";
import VideosSection from "@/components/homes/home-organic-food/VideosSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Organic Food || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header12 sticky={true} />
      <Hero />
      <Features5 />
      <Categories />
      <Products1 />
      <VideosSection />
      <Banner />
      <Blogs />
      <Footer7 />
    </>
  );
}
