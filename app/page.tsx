import Header2 from "@/components/headers/Header2";
import Products2 from "@/components/homes/home-electronics/Products2";
import Categories from "@/components/homes/home-electronics/Categories";
import Hero from "@/components/homes/home-electronics/Hero";
import Products from "@/components/homes/home-electronics/Products";
import Products3 from "@/components/homes/home-electronics/Products3";
import Products4 from "@/components/homes/home-electronics/Products4";
import Brands from "@/components/homes/home-electronics/Brands";
import Footer1 from "@/components/footers/Footer1";

import { Metadata } from "next";
import { fetchStorefrontCategories, fetchStorefrontProducts } from "@/lib/api";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Transasia - Electronics Store",
  description: "Transasia Electronics Store - High quality gadgets and electronics",
};

export default async function Home() {
  const [products, categories] = await Promise.all([
    fetchStorefrontProducts(),
    fetchStorefrontCategories(),
  ]);

  return (
    <>
      <Header2 sticky={true} />
      <Hero />
      <Categories categories={categories} />
      <Products products={products} />
      <Products2 />
      <Products3 />
      <Products4 />
      <Brands />
      <Footer1 />
    </>
  );
}
