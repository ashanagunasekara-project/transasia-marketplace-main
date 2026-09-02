import { Metadata } from "next";
import VariantSwitcherBanner from "@/components/core-features/variant-switcher/VariantSwitcherBanner";
import VariantSwitcherComponents from "@/components/core-features/variant-switcher/VariantSwitcherComponents";
export const metadata: Metadata = {
  title:
    "Variant Switcher | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function VariantSwitcherPage() {
  return (
    <>
            <VariantSwitcherBanner />
            <VariantSwitcherComponents />
    </>
  );
}
