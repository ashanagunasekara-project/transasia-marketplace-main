import Footer2 from "@/components/footers/Footer2";
import Header9Transparent from "@/components/headers/Header9Transparent";
import Blogs from "@/components/homes/home-games-store/Blogs";
import Brands from "@/components/homes/home-games-store/Brands";
import Categories from "@/components/homes/home-games-store/Categories";
import Hero from "@/components/homes/home-games-store/Hero";
import Products1 from "@/components/homes/home-games-store/Products1";
import Products2 from "@/components/homes/home-games-store/Products2";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Games Store || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <div className="rbt-bg-color-extra-nine rbt-header-transpernt-active">
      <Header9Transparent
        parentClassName="rbt-header rbt-header-9 rbt-transparent-header"
        sticky={true}
      />
      <Hero />
      <Categories />
      <Products1 />
      <Brands />
      <Products2 />
      <Blogs />
      <Footer2 />
    </div>
  );
}
