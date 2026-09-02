import Features2 from "@/components/common/features/Features2";
import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import Banner from "@/components/homes/home-cosmetic-beauty/Banner";
import Blogs from "@/components/homes/home-cosmetic-beauty/Blogs";
import Brands from "@/components/common/other-components/Brands2";
import Categories from "@/components/homes/home-cosmetic-beauty/Categories";
import Hero from "@/components/homes/home-cosmetic-beauty/Hero";
import InstagramPostes from "@/components/homes/home-cosmetic-beauty/InstagramPostes";
import Products1 from "@/components/homes/home-cosmetic-beauty/Products1";
import Products2 from "@/components/homes/home-cosmetic-beauty/Products2";
import VideoBanner from "@/components/homes/home-cosmetic-beauty/VideoBanner";
import ImageCompare from "@/components/homes/home-cosmetic-beauty/ImageCompare";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Cosmetic Beauty || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header7 sticky={true} />
      <Hero />
      <Features2 />
      <div className="container rbt-separator rbt-bg-color-gray-100" />
      <Categories />
      <Products1 />
      <Banner />
      <Products2 />
      <ImageCompare />
      <VideoBanner />
      <Brands parentClass="rbt-component-area rbt-section-gap" />
      <Blogs />
      <InstagramPostes />
      <Footer7 />
    </>
  );
}
