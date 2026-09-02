import { Metadata } from "next";
import ProductFilteringBanner from "@/components/core-features/product-filtering/ProductFilteringBanner";
import ProductFilteringComponents from "@/components/core-features/product-filtering/ProductFilteringComponents";
export const metadata: Metadata = {
  title:
    "Product Filtering | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function ProductFilteringPage() {
  return (
    <>
            <ProductFilteringBanner />

            <ProductFilteringComponents />
    </>
  );
}
