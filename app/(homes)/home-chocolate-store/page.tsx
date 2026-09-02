import Footer2 from "@/components/footers/Footer2";
import Header15 from "@/components/headers/Header15";
import Banner from "@/components/homes/home-chocolate-store/Banner";
import Categories from "@/components/homes/home-chocolate-store/Categories";
import Collections from "@/components/homes/home-chocolate-store/Collections";
import Hero from "@/components/homes/home-chocolate-store/Hero";
import Products1 from "@/components/homes/home-chocolate-store/Products1";
import Testimonials from "@/components/homes/home-chocolate-store/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Chocolate Store || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header15 containerClass="rbt-full-width-wrapper" sticky={true} />
      <Hero />
      <Categories />
      <Collections />
      <Products1 />
      <Banner />
      <Testimonials />
      <Footer2 />
    </>
  );
}
