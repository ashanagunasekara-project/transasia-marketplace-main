import { Metadata } from "next";
import SizeChartBuilderBanner from "@/components/core-features/size-chart-builder/SizeChartBuilderBanner";
import SizeChartBuilderComponents from "@/components/core-features/size-chart-builder/SizeChartBuilderComponents";
export const metadata: Metadata = {
  title:
    "Size Chart Builder | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function SizeChartBuilderPage() {
  return (
    <>
            <SizeChartBuilderBanner />
            <SizeChartBuilderComponents />
    </>
  );
}
