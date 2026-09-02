import { Metadata } from "next";
import FeaturedProducts from "@/components/elements/element-featured-products/FeaturedProducts";
import ElementsHero from "@/components/elements/ElementsHero";
export const metadata: Metadata = {
  title:
    "Element Featured Products | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function ElementFeaturedProductsPage() {
  return (
    <>
      <ElementsHero
        title={
          <>
            Exclusive <span>Featured Products</span>
          </>
        }
      />
      <FeaturedProducts />
    </>
  );
}
