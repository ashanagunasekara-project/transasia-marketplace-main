import Features2 from "@/components/common/features/Features2";
import TextSlider from "@/components/common/other-components/TextSlider";
import Footer10 from "@/components/footers/Footer10";
import Header11 from "@/components/headers/Header11";
import BannerCollections from "@/components/homes/home-sports/BannerCollections";
import Blogs from "@/components/homes/home-sports/Blogs";
import Categories from "@/components/homes/home-sports/Categories";
import Hero from "@/components/homes/home-sports/Hero";
import InstagramPosts from "@/components/homes/home-sports/InstagramPosts";
import Lookbook from "@/components/homes/home-sports/Lookbook";
import Products1 from "@/components/homes/home-sports/Products1";
import Products2 from "@/components/homes/home-sports/Products2";
import VideoBanner from "@/components/homes/home-sports/VideoBanner";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Sports || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header11 sticky={true} />
      <Hero />
      <TextSlider />
      <Categories />
      <BannerCollections />
      <Features2
        justifyCenter
        parentClass="rbt-component-area rbt-quick-inf-area rbt-bg-color-white rbt-section-gap2"
      />
      <Products1 />
      <VideoBanner />
      <Products2 />
      <Lookbook />
      <Blogs />
      <InstagramPosts />
      <Footer10 />
    </>
  );
}
