import { Metadata } from "next";
import PopupBuilderBanner from "@/components/core-features/popup-builder/PopupBuilderBanner";
import PopupComponents from "@/components/core-features/popup-builder/PopupComponents";
export const metadata: Metadata = {
  title: "Popup Builder | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function PopupBuilderPage() {
  return (
    <>
            <PopupBuilderBanner />
            <PopupComponents />
    </>
  );
}
