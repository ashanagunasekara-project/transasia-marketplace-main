import SplashElementBuilderSection from "@/components/splash/SplashElementBuilderSection";
import { Metadata } from "next";
import ShareableCartBanner from "@/components/core-features/shareable-cart/ShareableCartBanner";
export const metadata: Metadata = {
  title:
    "Shareable Cart | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function ShareableCartPage() {
  return (
    <>
      <ShareableCartBanner />

      <SplashElementBuilderSection
        sectionTitle="Easily Share Your Selections"
        sectionDescription={
          <>
            Explore our collection of pre-built compare tables designed to help
            you showcase <br />
            product features effectively. Customize each table to fit your
            specific needs.
          </>
        }
        cards={[
          {
            number: "01",
            title: (
              <>
                Shareable Cart: Easily <br />
                Share Your Selections
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
