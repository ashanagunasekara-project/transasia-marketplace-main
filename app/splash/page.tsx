import HeaderSplash from "@/components/headers/HeaderSplash";
// Above-fold: load eagerly so they render with the first HTML response.
import Banner from "@/components/splash/Banner";
import TextSlider from "@/components/splash/TextSlider";
import Features from "@/components/splash/Features";
import SplashClientContent from "@/components/splash/SplashClientContent";
import { SplashSectionNavProvider } from "@/components/splash/SplashSectionNavContext";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Splash || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart splash page showcasing demos and features.",
};

export default function SplashPage() {
  return (
    <SplashSectionNavProvider>
      <HeaderSplash sticky={true} />
      <div className="splash-page-bg">
        {/* ── Above fold (eagerly SSR'd) ─────────────────────────── */}
        <Banner />
        <TextSlider />
        <Features />

        <SplashClientContent />
      </div>
    </SplashSectionNavProvider>
  );
}
