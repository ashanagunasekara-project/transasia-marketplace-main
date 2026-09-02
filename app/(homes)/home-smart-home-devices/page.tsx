import Footer7 from "@/components/footers/Footer7";
import Header15 from "@/components/headers/Header15";
import Banner from "@/components/homes/home-smart-home-devices/Banner";
import Collections from "@/components/homes/home-smart-home-devices/Collections";
import Features from "@/components/homes/home-smart-home-devices/Features";
import Hero from "@/components/homes/home-smart-home-devices/Hero";
import Testimonials from "@/components/homes/home-smart-home-devices/Testimonials";
import VideoBanner from "@/components/homes/home-smart-home-devices/VideoBanner";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Smart Home Devices || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header15 containerClass="rbt-full-width-wrapper" sticky={true} />
      <Hero />
      <Banner />
      <Collections />
      <Features />
      <VideoBanner />
      <Testimonials />
      <Footer7 />
    </>
  );
}
