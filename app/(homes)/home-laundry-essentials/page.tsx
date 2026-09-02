import Footer12 from "@/components/footers/Footer12";
import Header15 from "@/components/headers/Header15";
import Categories from "@/components/homes/home-laundry-essentials/Categories";
import Collections from "@/components/homes/home-laundry-essentials/Collections";
import Hero from "@/components/homes/home-laundry-essentials/Hero";
import Products1 from "@/components/homes/home-laundry-essentials/Products1";
import Testimonials from "@/components/homes/home-laundry-essentials/Testimonials";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Laundry Essentials || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header15 sticky={true} />
      <Hero />
      <Categories />
      <Collections />
      <Products1 />
      <Testimonials />
      <Footer12 />
    </>
  );
}
