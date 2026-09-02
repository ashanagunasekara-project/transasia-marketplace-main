import { Metadata } from "next";
import RecentProducts from "@/components/elements/element-recent-products/RecentProducts";
import ElementsHero from "@/components/elements/ElementsHero";
export const metadata: Metadata = {
  title:
    "Element Recent Products | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function ElementRecentProductsPage() {
  return (
    <>
      <ElementsHero
        title={
          <>
            Exclusive <span>Recent Products</span>
          </>
        }
      />
      <RecentProducts />
    </>
  );
}
