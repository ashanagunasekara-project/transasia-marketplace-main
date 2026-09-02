import Features3 from "@/components/common/features/Features3";
import Footer9 from "@/components/footers/Footer9";
import Header13 from "@/components/headers/Header13";
import Banner from "@/components/homes/home-wedding-accessories/Banner";
import Categories from "@/components/homes/home-wedding-accessories/Categories";
import Collections from "@/components/homes/home-wedding-accessories/Collections";
import Hero from "@/components/homes/home-wedding-accessories/Hero";
import InstagramPosts from "@/components/homes/home-wedding-accessories/InstagramPosts";
import Lookbook from "@/components/homes/home-wedding-accessories/Lookbook";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Wedding Accessories || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header13 sticky={true} />
      <Hero />
      <Categories />
      <Lookbook />
      <Banner />
      <Collections />
      <Features3 parentClass="rbt-component-area rbt-quick-inf-area" />
      <InstagramPosts />
      <Footer9 footerImage="/assets/images/footer/image3.webp" />
    </>
  );
}
