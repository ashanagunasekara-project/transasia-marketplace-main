import SplashElementBuilderSection from "@/components/splash/SplashElementBuilderSection";
import { Metadata } from "next";
import FlashSellManagementBanner from "@/components/core-features/flash-sell-management/FlashSellManagementBanner";
export const metadata: Metadata = {
  title:
    "Flash Sell Management | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function FlashSellManagementPage() {
  return (
    <>
      <FlashSellManagementBanner />

      <SplashElementBuilderSection
        sectionTitle="Flash Sell Management"
        cards={[
          {
            number: "01",
            title: (
              <>
                Manage Your Flash Sell <br />
                with Flash Sell <br />
                Management
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
