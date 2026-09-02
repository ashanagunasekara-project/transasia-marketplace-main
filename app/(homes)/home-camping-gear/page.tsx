import Footer9 from "@/components/footers/Footer9";
import Header14 from "@/components/headers/Header14";
import Banner from "@/components/homes/home-camping-gear/Banner";
import Blogs from "@/components/homes/home-camping-gear/Blogs";
import Categories from "@/components/homes/home-camping-gear/Categories";
import Hero from "@/components/homes/home-camping-gear/Hero";
import Products1 from "@/components/homes/home-camping-gear/Products1";
import Testimonials from "@/components/homes/home-camping-gear/Testimonials";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Camping Shop || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header14 sticky={true} />
      <Hero />
      <Categories />
      <Products1 />
      <Banner />
      <Testimonials />
      <Blogs />
      <Footer9 />
    </>
  );
}
