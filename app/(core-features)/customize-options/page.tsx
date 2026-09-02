import SplashElementBuilderSection from "@/components/splash/SplashElementBuilderSection";
import { Metadata } from "next";
import CustomizeOptionsBanner from "@/components/core-features/customize-options/CustomizeOptionsBanner";
export const metadata: Metadata = {
  title:
    "Customize Options | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function CustomizeOptionsPage() {
  return (
    <>
      <CustomizeOptionsBanner />

      <SplashElementBuilderSection
        sectionTitle="Ultimate Customize Options"
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
                Customize Options to <br />
                Each Individual Element
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
