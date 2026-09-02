import Features3 from "@/components/common/features/Features3";
import Footer7 from "@/components/footers/Footer7";
import Header13 from "@/components/headers/Header13";
import Banner from "@/components/homes/home-shoes-kids/Banner";
import Hero from "@/components/homes/home-shoes-kids/Hero";
import InstagramPosts from "@/components/homes/home-shoes-kids/InstagramPosts";
import Products1 from "@/components/homes/home-shoes-kids/Products1";
import VideosSection from "@/components/homes/home-shoes-kids/VideosSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Shoe Kids || Unimart - eCommerce React Nextjs Bootstrap5 Template",
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
      <Features3 parentClass="rbt-component-area rbt-quick-inf-area rbt-bg-color-white rbt-section-gap2Top" />
      <InstagramPosts />
      <Footer7 />
    </>
  );
}
