import Features3 from "@/components/common/features/Features3";
import Footer4 from "@/components/footers/Footer4";
import Header15 from "@/components/headers/Header15";
import Blogs from "@/components/homes/home-laptop/Blogs";
import Features from "@/components/homes/home-laptop/Features";
import Hero from "@/components/homes/home-laptop/Hero";
import LaptopConfiguration from "@/components/homes/home-laptop/LaptopConfiguration";
import VideoBanner from "@/components/homes/home-laptop/VideoBanner";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Laptop || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header15 containerClass="rbt-full-width-wrapper" sticky={true} />
      <Hero />
      <LaptopConfiguration />
      <Features />
      <VideoBanner />
      <Blogs />
      <Features3 parentClass="rbt-component-area rbt-quick-inf-area rbt-bg-color-white rbt-section-gap" />
      <Footer4 />
    </>
  );
}
