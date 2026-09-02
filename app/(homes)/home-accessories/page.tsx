import TextSlider from "@/components/common/other-components/TextSlider";
import Footer6 from "@/components/footers/Footer6";
import Header4 from "@/components/headers/Header4";
import Banner from "@/components/homes/home-accessories/Banner";
import Banner2 from "@/components/homes/home-accessories/Banner2";
import Blogs from "@/components/homes/home-accessories/Blogs";
import Brands from "@/components/homes/home-accessories/Brands";
import Categories from "@/components/homes/home-accessories/Categories";
import Hero from "@/components/homes/home-accessories/Hero";
import InstagramPosts from "@/components/homes/home-accessories/InstagramPosts";
import Products from "@/components/homes/home-accessories/Products";
import Products2 from "@/components/homes/home-accessories/Products2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Accessories || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};

export default function page() {
  return (
    <>
      <Header4 sticky={true} />
      <Hero />
      <TextSlider parentClass="rbt-component-area rbt-categories-scroll-area rbt-bg-color-white" />
      <Categories />
      <Banner />
      <Products />
      <Brands />
      <Products2 />
      <Banner2 />
      <Blogs />
      <InstagramPosts />
      <TextSlider parentClass="rbt-component-area rbt-categories-scroll-area rbt-bg-color-white" />
      <Footer6 />
    </>
  );
}
