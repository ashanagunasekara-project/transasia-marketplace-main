import SplashElementBuilderSection from "@/components/splash/SplashElementBuilderSection";
import { Metadata } from "next";
import PageOptionsBanner from "@/components/core-features/page-options/PageOptionsBanner";
export const metadata: Metadata = {
  title: "Page Options | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function PageOptionsPage() {
  return (
    <>
      <PageOptionsBanner />
      <SplashElementBuilderSection
        sectionTitle="Easy to Build Custom Page"
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
                Highly Customizable <br />
                Elements: Customize with <br />
                Ease
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
