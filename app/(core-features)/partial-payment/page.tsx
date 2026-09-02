import SplashElementBuilderSection from "@/components/splash/SplashElementBuilderSection";
import { Metadata } from "next";
import PartialPaymentBanner from "@/components/core-features/partial-payment/PartialPaymentBanner";
export const metadata: Metadata = {
  title:
    "Partial Payment | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function PartialPaymentPage() {
  return (
    <>
      <PartialPaymentBanner />
      <SplashElementBuilderSection
        sectionTitle="Flexible & Convenient Checkout"
        cards={[
          {
            number: "01",
            title: (
              <>
                Partial Payment: Flexible <br />
                &amp; Convenient Checkout
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
