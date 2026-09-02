import { Metadata } from "next";
import BoostFeaturesBanner from "@/components/core-features/boost-features/BoostFeaturesBanner";
import BoostFeaturesComponents from "@/components/core-features/boost-features/BoostFeaturesComponents";
export const metadata: Metadata = {
  title:
    "Boost Features | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function BoostFeaturesPage() {
  return (
    <>
            <BoostFeaturesBanner />
            <BoostFeaturesComponents />
    </>
  );
}
