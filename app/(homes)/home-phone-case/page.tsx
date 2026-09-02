import Features3 from "@/components/common/features/Features3";
import TextSlider from "@/components/common/other-components/TextSlider";
import Footer9 from "@/components/footers/Footer9";
import Header8 from "@/components/headers/Header8";
import Banner from "@/components/homes/home-phone-case/Banner";
import Banner2 from "@/components/homes/home-phone-case/Banner2";
import Brands from "@/components/homes/home-phone-case/Brands";
import Collections from "@/components/homes/home-phone-case/Collections";
import Hero from "@/components/homes/home-phone-case/Hero";
import InstagramPosts from "@/components/homes/home-phone-case/InstagramPosts";
import Products1 from "@/components/homes/home-phone-case/Products1";
import Products2 from "@/components/homes/home-phone-case/Products2";
import Testimonials from "@/components/homes/home-phone-case/Testimonials";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Phone Case || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header8 sticky={true} />
      <Hero />
      <Brands />
      <Products1 />
      <Banner />
      <Products2 />
      <Banner2 />
      <Collections />
      <TextSlider
        bgClass="bg-brand-50"
        parentClass="rbt-component-area rbt-categories-scroll-area rbt-bg-color-white rbt-section-gap2Top"
      />
      <Testimonials />
      <InstagramPosts />
      <Features3 parentClass="rbt-component-area rbt-quick-inf-area rbt-bg-color-white rbt-section-gapBottom" />
      <Footer9 />
    </>
  );
}
