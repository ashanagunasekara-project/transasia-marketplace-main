import SplashElementBuilderSection from "@/components/splash/SplashElementBuilderSection";
import { Metadata } from "next";
import OfferManagementBanner from "@/components/core-features/offer-management/OfferManagementBanner";
export const metadata: Metadata = {
  title:
    "Offer Management | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function OfferManagementPage() {
  return (
    <>
      <OfferManagementBanner />
      <SplashElementBuilderSection
        sectionTitle="Offers Management: Maximize Deals & Discounts"
        cards={[
          {
            number: "01",
            title: (
              <>
                Offers Management: <br />
                Maximize Deals &amp; <br />
                Discounts
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
