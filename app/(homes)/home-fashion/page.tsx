import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
import Banner from "@/components/homes/home-fashion/Banner";
import Categories from "@/components/homes/home-fashion/Categories";
import CategoryScroll from "@/components/homes/home-fashion/CategoryScroll";
import Hero from "@/components/homes/home-fashion/Hero";

import LookbookProducts from "@/components/homes/home-fashion/LookbookProducts";
import Products1 from "@/components/homes/home-fashion/Products1";
import Products2 from "@/components/homes/home-fashion/Products2";
import Products3 from "@/components/homes/home-fashion/Products3";
import SingleProduct from "@/components/homes/home-fashion/SingleProduct";
import VideosSection from "@/components/homes/home-fashion/VideosSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Fashion 01 || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header3 sticky={true} />
      <Hero />
      <CategoryScroll />
      <Categories />
      <Products1 />
      <Banner />
      <Products2 />
      <SingleProduct />
      <LookbookProducts />
      <Products3 />
      <VideosSection />
      <Footer3 />{" "}
    </>
  );
}
