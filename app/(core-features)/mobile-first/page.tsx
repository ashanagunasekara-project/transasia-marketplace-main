import SplashElementBuilderSection from "@/components/splash/SplashElementBuilderSection";
import { Metadata } from "next";
import MobileFirstBanner from "@/components/core-features/mobile-first/MobileFirstBanner";
export const metadata: Metadata = {
  title: "Mobile First | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function MobileFirstPage() {
  return (
    <>
      <MobileFirstBanner />
      <SplashElementBuilderSection
        sectionTitle="Mobile First Layout"
        sectionDescription={
          <>
            Explore our collection of pre-built compare tables designed to help
            you showcase <br />
            product features effectively. Customize each table to fit your
            specific needs and enhance your users&apos; experience.
          </>
        }
        cards={[
          {
            number: "01",
            title: (
              <>
                Build Your Website with <br />
                Mobile First Layout
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
