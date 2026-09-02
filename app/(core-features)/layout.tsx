import HeaderSplash from "@/components/headers/HeaderSplash";
import FeaturesNavigationSection from "@/components/core-features/sections/FeaturesNavigationSection";
import SplashCallToActionSection from "@/components/core-features/sections/SplashCallToActionSection";
import SplashScrollableContentSection from "@/components/core-features/sections/SplashScrollableContentSection";
import SplashSupportSection from "@/components/core-features/sections/SplashSupportSection";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderSplash hasBg sticky={true} />
      <main>
        {children}
        <FeaturesNavigationSection />
        <SplashCallToActionSection />
        <SplashScrollableContentSection />
        <SplashSupportSection />
      </main>

      <footer className="copyright-area copyright-style-1 ptb--20 rbt-bg-color-gray-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <p className="text-center h6 rbt-text-color-gray-400">
                Unimart by{" "}
                <a
                  className="text-decoration-underline rbt-text-color-heading"
                  href="https://rainbowthemes.net/"
                >
                  Rainbow-Themes.
                </a>
                ©All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
