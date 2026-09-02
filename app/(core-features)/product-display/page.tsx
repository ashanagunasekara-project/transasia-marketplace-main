import { Metadata } from "next";
import ProductDisplayBanner from "@/components/core-features/product-display/ProductDisplayBanner";
import ProductDisplayComponents from "@/components/core-features/product-display/ProductDisplayComponents";
export const metadata: Metadata = {
  title:
    "Product Display | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function ProductDisplayPage() {
  return (
    <>
            <ProductDisplayBanner />
            <ProductDisplayComponents />
    </>
  );
}
