import Features3 from "@/components/common/features/Features3";
import Footer6 from "@/components/footers/Footer6";
import Header15 from "@/components/headers/Header15";
import Categories from "@/components/homes/home-electric-cycle/Categories";
import Hero from "@/components/homes/home-electric-cycle/Hero";
import Products1 from "@/components/homes/home-electric-cycle/Products1";
import Testimonials from "@/components/homes/home-electric-cycle/Testimonials";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Electric Cycle || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header15 containerClass="rbt-full-width-wrapper" sticky={true} />
      <Hero />
      <Categories />
      <Products1 />
      <Testimonials />
      <Features3 parentClass="rbt-component-area rbt-quick-inf-area rbt-quick-inf-area-border rbt-bg-color-white rbt-section-gap2Top" />
      <Footer6 />
    </>
  );
}
