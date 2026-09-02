import { Metadata } from "next";
import PerformanceBanner from "@/components/core-features/performance/PerformanceBanner";
import PerformanceComponents from "@/components/core-features/performance/PerformanceComponents";
export const metadata: Metadata = {
  title: "Performance | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function PerformancePage() {
  return (
    <>
            <PerformanceBanner />
            <PerformanceComponents />
    </>
  );
}
