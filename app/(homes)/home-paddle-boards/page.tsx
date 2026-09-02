import Features3 from "@/components/common/features/Features3";
import Footer4 from "@/components/footers/Footer4";
import Header13 from "@/components/headers/Header13";
import Banner from "@/components/homes/home-paddle-boards/Banner";
import Hero from "@/components/homes/home-paddle-boards/Hero";
import InstagramPosts from "@/components/homes/home-paddle-boards/InstagramPosts";
import Products1 from "@/components/homes/home-paddle-boards/Products1";
import VideosSection from "@/components/homes/home-paddle-boards/VideosSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Paddle Boards || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header13 sticky={true} />
      <Hero />
      <Products1 />
      <Banner />
      <VideosSection />
      <Features3 parentClass="rbt-component-area rbt-quick-inf-area rbt-bg-color-white rbt-section-gapTop" />
      <InstagramPosts />
      <Footer4 />
    </>
  );
}
