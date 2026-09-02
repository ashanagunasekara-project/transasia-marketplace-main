import SplashElementBuilderSection from "@/components/splash/SplashElementBuilderSection";
import { Metadata } from "next";
import MultiStepCheckoutBanner from "@/components/core-features/multi-step-checkout/MultiStepCheckoutBanner";
export const metadata: Metadata = {
  title:
    "Multi Step Checkout | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function MultiStepCheckoutPage() {
  return (
    <>
      <MultiStepCheckoutBanner />
      <SplashElementBuilderSection
        sectionTitle="Multi-Step Checkout"
        cards={[
          {
            number: "01",
            title: (
              <>
                Multi-Step Checkout: <br />
                Streamlined &amp; User- <br />
                Friendly
              </>
            ),
            description: (
              <>
                Compare your selected products in a table with Unimart Compare
                Table Builder. Choose from a variety of pre-built templates.
              </>
            ),
          },
        ]}
      />
    </>
  );
}
