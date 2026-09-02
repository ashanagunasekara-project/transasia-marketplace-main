import Features3 from "@/components/common/features/Features3";
import Footer10 from "@/components/footers/Footer10";
import Header13 from "@/components/headers/Header13";
import Categories from "@/components/homes/home-jewellery-two/Categories";
import Hero from "@/components/homes/home-jewellery-two/Hero";
import InstagramPosts from "@/components/homes/home-jewellery-two/InstagramPosts";
import Products1 from "@/components/homes/home-jewellery-two/Products1";
import VideoBanner from "@/components/homes/home-jewellery-two/VideoBanner";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Jewelry 02 || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <div className="home-jewellery-two">
        <Header13 />
        <Hero />
        <Categories />
        <Products1 />
        <VideoBanner />
        <Features3 parentClass="rbt-component-area rbt-quick-inf-area rbt-bg-color-white rbt-section-gap2 pb-0" />
        <div className="pt-0 rbt-section-gap2">
          <InstagramPosts />
        </div>
        <Footer10 />
      </div>
    </>
  );
}
