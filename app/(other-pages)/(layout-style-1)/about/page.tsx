import Features from "@/components/other-pages/about/Features";
import Facts from "@/components/other-pages/about/Facts";
import VideoSection from "@/components/other-pages/about/VideoSection";
import AboutUs from "@/components/other-pages/about/AboutUs";
import OurMission from "@/components/other-pages/about/OurMission";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Learn more about Unimart, our mission, and our story.",
};

export default function page() {
  return (
    <>
      <AboutUs />
      <OurMission />
      <Features />
      <Facts />
      <VideoSection />
    </>
  );
}
