import Footer3 from "@/components/footers/Footer3";
import Header8 from "@/components/headers/Header8";
import Categories from "@/components/homes/home-art-frames-store/Categories";
import Hero from "@/components/homes/home-art-frames-store/Hero";
import Products1 from "@/components/homes/home-art-frames-store/Products1";
import SingleProduct from "@/components/homes/home-art-frames-store/SingleProduct";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Art Frames Store || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header8 sticky={true} />
      <Hero />
      <Categories />
      <Products1 />
      <SingleProduct />
      <Footer3 />
    </>
  );
}
