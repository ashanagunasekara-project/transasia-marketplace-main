import SplashElementBuilderSection from "@/components/splash/SplashElementBuilderSection";
import { Metadata } from "next";
import StickyCartBuilderBanner from "@/components/core-features/sticky-cart-builder/StickyCartBuilderBanner";
export const metadata: Metadata = {
  title:
    "Sticky Cart Builder | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function StickyCartBuilderPage() {
  return (
    <>
      <StickyCartBuilderBanner />

      <SplashElementBuilderSection
        sectionTitle="Convenient Shopping Experience"
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
                Sticky Add to Cart: <br />
                Convenient Shopping <br />
                Experience
              </>
            ),
            description: (
              <>
                Compare your selected products in a table with Unimart Compare
                Table Builder. Choose from a variety of pre-built templates and
                customize them to match your brand.
              </>
            ),
          },
        ]}
      />
    </>
  );
}
