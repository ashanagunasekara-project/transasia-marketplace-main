import { Metadata } from "next";
import BestSellingProducts from "@/components/elements/element-best-selling-products/BestSellingProducts";
import ElementsHero from "@/components/elements/ElementsHero";
export const metadata: Metadata = {
  title:
    "Element Best Selling Products | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function ElementBestSellingProductsPage() {
  return (
    <>
      <ElementsHero
        title={
          <>
            Exclusive <span>Best Selling Products</span>
          </>
        }
      />
      <BestSellingProducts />
    </>
  );
}
