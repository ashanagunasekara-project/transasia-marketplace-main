import SplashElementBuilderSection from "@/components/splash/SplashElementBuilderSection";
import { Metadata } from "next";
import SalePushNotificationBanner from "@/components/core-features/sale-push-notification/SalePushNotificationBanner";
export const metadata: Metadata = {
  title:
    "Sale Push Notification | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function SalePushNotificationPage() {
  return (
    <>
      <SalePushNotificationBanner />

      <SplashElementBuilderSection
        sectionTitle="Stay Informed on Exclusive Deals"
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
                Sales Push Notification: <br />
                Stay Informed on <br />
                Exclusive Deals
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
