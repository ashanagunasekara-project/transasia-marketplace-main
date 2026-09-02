import Footer13 from "@/components/footers/Footer13";
import Header13 from "@/components/headers/Header13";
import Banner from "@/components/homes/home-cyber-monday/Banner";
import Banner2 from "@/components/homes/home-cyber-monday/Banner2";
import Features from "@/components/common/features/Features6";

import Hero from "@/components/homes/home-cyber-monday/Hero";
import Products1 from "@/components/homes/home-cyber-monday/Products1";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Cyber Monday || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <div className="rbt-bg-color-dark-black">
      <Header13 sticky={true} />
      <Hero />
      <Banner />
      <Products1 />
      <Banner2 />
      <Features />
      <Footer13 />
    </div>
  );
}
