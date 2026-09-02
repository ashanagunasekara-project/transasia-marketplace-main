import { Metadata } from "next";
import CartBuilderBanner from "@/components/core-features/cart-builder/CartBuilderBanner";
import CartBuilderComponents from "@/components/core-features/cart-builder/CartBuilderComponents";
export const metadata: Metadata = {
  title: "Cart Builder | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function CartBuilderPage() {
  return (
    <>
      <CartBuilderBanner />
      <CartBuilderComponents />
    </>
  );
}
