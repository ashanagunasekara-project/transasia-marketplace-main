import { Metadata } from "next";
import PricingStyleOne from "@/components/elements/element-pricing/PricingStyleOne";
import PricingStyleTwo from "@/components/elements/element-pricing/PricingStyleTwo";
import PricingStyleThree from "@/components/elements/element-pricing/PricingStyleThree";
import PricingStyleFour from "@/components/elements/element-pricing/PricingStyleFour";
import ElementsHero from "@/components/elements/ElementsHero";
export const metadata: Metadata = {
  title:
    "Element Pricing | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function ElementPricingPage() {
  return (
    <>
      <>
        <ElementsHero
          title={
            <>
              Exclusive <span>Pricing</span>
            </>
          }
        />
        <PricingStyleOne />
        <PricingStyleTwo />
        <PricingStyleThree />
        <PricingStyleFour />
      </>
    </>
  );
}
