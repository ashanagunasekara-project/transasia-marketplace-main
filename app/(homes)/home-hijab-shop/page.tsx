import Features5 from "@/components/common/features/Features5";
import Footer11 from "@/components/footers/Footer11";
import Header13 from "@/components/headers/Header13";
import Banner from "@/components/homes/home-hijab-shop/Banner";
import Categories from "@/components/homes/home-hijab-shop/Categories";
import Hero from "@/components/homes/home-hijab-shop/Hero";
import Products1 from "@/components/homes/home-hijab-shop/Products1";
import VideosSection from "@/components/homes/home-hijab-shop/VideosSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Hijab Shop || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header13 sticky={true} />
      <Hero />
      <Categories />
      <Features5 parentClass="rbt-component-area rbt-quick-inf-area rbt-bg-color-white" />
      <Products1 />
      <Banner />
      <VideosSection />
      <Footer11 />
    </>
  );
}
