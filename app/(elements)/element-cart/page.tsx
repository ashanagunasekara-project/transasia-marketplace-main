import { Metadata } from "next";
import ShoppingCart from "@/components/elements/element-cart/ShoppingCart";
import ElementsHero from "@/components/elements/ElementsHero";
export const metadata: Metadata = {
  title: "Element Cart | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function ElementCartPage() {
  return (
    <>
      <ElementsHero
        title={
          <>
            Exclusive <span>Cart</span>
          </>
        }
      />
      <ShoppingCart />
    </>
  );
}
