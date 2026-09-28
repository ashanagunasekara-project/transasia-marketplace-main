import Header2 from "@/components/headers/Header2";
import Products2 from "@/components/homes/home-electronics/Products2";
import Categories from "@/components/homes/home-electronics/Categories";
import Hero from "@/components/homes/home-electronics/Hero";
import Products from "@/components/homes/home-electronics/Products";
import Products3 from "@/components/homes/home-electronics/Products3";
import Brands from "@/components/homes/home-electronics/Brands";
import Footer1 from "@/components/footers/Footer1";

import { Metadata } from "next";
import {
  fetchStorefrontCategories,
  fetchStorefrontProducts,
  fetchStorefrontHeroBanners,
  fetchStorefrontPopularCategories,
  fetchStorefrontTopbar,
  fetchStorefrontPromotions,
} from "@/lib/api";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Transasia - Electronics Store",
  description: "Transasia Electronics Store - High quality gadgets and electronics",
};

export default async function Home() {
  const [
    products,
    categories,
    heroData,
    popularCategoriesData,
    topbarData,
    promotionsData,
  ] = await Promise.all([
    fetchStorefrontProducts(),
    fetchStorefrontCategories(),
    fetchStorefrontHeroBanners(),
    fetchStorefrontPopularCategories(),
    fetchStorefrontTopbar(),
    fetchStorefrontPromotions(),
  ]);

  return (
    <>
      <Header2 sticky={true} topbarData={topbarData} />
      <Hero
        initialBanners={heroData?.data}
        initialAutoShift={heroData?.autoShift}
        initialAutoShiftDelay={heroData?.autoShiftDelay}
      />
      <Categories
        categories={categories}
        initialPopularData={popularCategoriesData}
      />
      <Products products={products} />
      <Products2
        powerUpBanner={promotionsData?.powerUpBanner}
        showTodaysBestDeals={promotionsData?.showTodaysBestDeals}
      />
      <Products3
        highlightsBanner={promotionsData?.highlightsBanner}
        highlightsProducts={promotionsData?.highlightsProducts}
      />
      {/* Featured Products (Products4) removed per user request */}
      <Brands />
      <Footer1 />
    </>
  );
}
