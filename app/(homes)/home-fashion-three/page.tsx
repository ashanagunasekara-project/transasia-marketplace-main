import Footer7 from "@/components/footers/Footer7";
import Header15 from "@/components/headers/Header15";
import Banner from "@/components/homes/home-fashion-three/Banner";
import Categories from "@/components/homes/home-fashion-three/Categories";
import Hero from "@/components/homes/home-fashion-three/Hero";
import InstagramProducts from "@/components/homes/home-fashion-three/InstagramProducts";
import Products1 from "@/components/homes/home-fashion-three/Products1";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Fashion 03 || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header15 containerClass="rbt-full-width-wrapper" sticky={true} />
      <Hero />
      <Categories />
      <Products1 />
      <Banner />
      <InstagramProducts />
      <Footer7 />
    </>
  );
}
