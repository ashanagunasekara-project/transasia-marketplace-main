import Footer2 from "@/components/footers/Footer2";
import Header15 from "@/components/headers/Header15";
import Blogs from "@/components/homes/home-gym-supliments-one/Blogs";
import Categories from "@/components/homes/home-gym-supliments-one/Categories";
import Hero from "@/components/homes/home-gym-supliments-one/Hero";
import Products1 from "@/components/homes/home-gym-supliments-one/Products1";
import Testimonials from "@/components/homes/home-gym-supliments-one/Testimonials";
import VideosSection from "@/components/homes/home-gym-supliments-one/VideoSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Gym Supplement || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header15 containerClass="rbt-full-width-wrapper" sticky={true} />
      <Hero />
      <Categories />
      <Products1 />
      <VideosSection />
      <Testimonials />
      <Blogs />
      <Footer2 />
    </>
  );
}
