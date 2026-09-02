import { Metadata } from "next";
import MegaMenuBanner from "@/components/core-features/advanced-megamenu/MegaMenuBanner";
import MegaMenuPresentation from "@/components/core-features/advanced-megamenu/MegaMenuPresentation";
import MegaMenuComponents from "@/components/core-features/advanced-megamenu/MegaMenuComponents";
export const metadata: Metadata = {
  title:
    "Advanced Megamenu | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function AdvancedMegamenuPage() {
  return (
    <>
      <MegaMenuBanner />
      <MegaMenuPresentation />
      <MegaMenuComponents />
    </>
  );
}
