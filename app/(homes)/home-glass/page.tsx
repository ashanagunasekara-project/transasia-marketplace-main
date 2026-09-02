import TextSlider from "@/components/common/other-components/TextSlider";
import Footer11 from "@/components/footers/Footer11";
import Header10 from "@/components/headers/Header10";
import Banner from "@/components/homes/home-glass/Banner";
import Banner2 from "@/components/homes/home-glass/Banner2";
import BannerVideo from "@/components/homes/home-glass/BannerVideo";
import Blogs from "@/components/homes/home-glass/Blogs";
import Collections from "@/components/homes/home-glass/Collections";
import Hero from "@/components/homes/home-glass/Hero";
import InstagramPosts from "@/components/homes/home-glass/InstagramPosts";
import Products1 from "@/components/homes/home-glass/Products1";
import Products2 from "@/components/homes/home-glass/Products2";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Glass || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header10 sticky={true} />
      <Hero />
      <Collections />
      <Banner />
      <Products1 />
      <TextSlider />
      <Banner2 />
      <BannerVideo />
      <Products2 />
      <Blogs />
      <div className="rbt-component-area">
        <div className="container">
          <hr className="rbt-separator rbt-separator-gray100" />
        </div>
      </div>
      <InstagramPosts />
      <Footer11 />
    </>
  );
}
