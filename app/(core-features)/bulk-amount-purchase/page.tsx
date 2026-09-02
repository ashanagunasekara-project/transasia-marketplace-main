import SplashElementBuilderSection from "@/components/splash/SplashElementBuilderSection";
import { Metadata } from "next";
import BulkAmountPurchaseBanner from "@/components/core-features/bulk-amount-purchase/BulkAmountPurchaseBanner";
export const metadata: Metadata = {
  title:
    "Bulk Amount Purchase | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function BulkAmountPurchasePage() {
  return (
    <>
      <BulkAmountPurchaseBanner />

      <SplashElementBuilderSection
        sectionTitle="Bulk Amount Purchase"
        cards={[
          {
            number: "01",
            title: (
              <>
                Bulk Purchase: Save More <br />
                with Large Orders
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
