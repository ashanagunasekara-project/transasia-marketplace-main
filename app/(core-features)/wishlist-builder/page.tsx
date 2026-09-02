import SplashElementBuilderSection from "@/components/splash/SplashElementBuilderSection";
import { Metadata } from "next";
import WishlistBuilderBanner from "@/components/core-features/wishlist-builder/WishlistBuilderBanner";
export const metadata: Metadata = {
  title:
    "Wishlist Builder | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function WishlistBuilderPage() {
  return (
    <>
      <WishlistBuilderBanner />

      <SplashElementBuilderSection
        sectionTitle="Fast Performance Across Platforms"
        sectionDescription={
          <>
            Experience unparalleled speed and efficiency with Unimart, <br />
            optimized for all platforms.
          </>
        }
        cards={[
          {
            number: "01",
            title: (
              <>
                Wishlist Page Layout with <br />
                Table
              </>
            ),
            description: (
              <>
                A comprehensive layout for managing wishlists, featuring a
                detailed table view for easy organization.
              </>
            ),
            image: {
              src: "/assets/images/splash/builder-element/wishlist/wishlist-1.png",
              alt: "Wishlist builder preview",
              width: 1296,
              height: 840,
            },
          },
        ]}
      />
    </>
  );
}
