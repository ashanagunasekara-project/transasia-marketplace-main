import SplashElementBuilderSection from "@/components/splash/SplashElementBuilderSection";
import { Metadata } from "next";
import CompareTableBuilderBanner from "@/components/core-features/compare-table-builder/CompareTableBuilderBanner";
export const metadata: Metadata = {
  title:
    "Compare Table Builder | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function CompareTableBuilderPage() {
  return (
    <>
      <CompareTableBuilderBanner />

      <SplashElementBuilderSection
        sectionTitle="10+ Pre-built Compare Table"
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
                Compare Your Selected <br />
                Products in a Table.
              </>
            ),
            description: (
              <>
                Compare your selected products in a table with Unimart Compare
                Table Builder. Choose from a variety of pre-built templates and
                customize them to match your brand.
              </>
            ),
            image: {
              src: "/assets/images/splash/builder-element/compare-table/compare-table-1.png",
              alt: "Compare Table Preview",
              width: 1000,
              height: 600,
            },
          },
        ]}
      />
    </>
  );
}
