import SplashElementBuilderSection from "@/components/splash/SplashElementBuilderSection";
import { Metadata } from "next";
import StockProgressbarBanner from "@/components/core-features/stock-progressbar/StockProgressbarBanner";
export const metadata: Metadata = {
  title:
    "Stock Progressbar | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function StockProgressbarPage() {
  return (
    <>
      <StockProgressbarBanner />

      <SplashElementBuilderSection
        sectionTitle="Stock Progress Bar Variations"
        sectionDescription={
          <>
            Choose from a variety of pre-built variation switcher designs to{" "}
            <br />
            enhance the user experience on your website.
          </>
        }
        cards={[
          {
            number: "01",
            title: (
              <>
                Display Product Quantity <br />
                using Progressbar
              </>
            ),
            description: (
              <>
                A progress bar that visually represents the quantity of products
                available in stock.
              </>
            ),
            image: {
              src: "/assets/images/splash/builder-element/stock-progressbar/var-progressbar-1.png",
              alt: "Stock progress bar variation preview",
              width: 1296,
              height: 840,
            },
          },
        ]}
      />
    </>
  );
}
