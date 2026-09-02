import { Cabin, Caveat, Bebas_Neue, Caprasimo } from "next/font/google";
import LayoutEffectsLoader from "@/components/common/other-components/LayoutEffectsLoader";
import BootstrapJsLoader from "@/components/common/other-components/BootstrapJsLoader";
import type { Metadata } from "next";

import "../public/assets/scss/main.scss";

const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cabin",
  display: "swap",
  preload: false,
});
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
  preload: false,
});
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
  display: "swap",
  preload: false,
});
const caprasimo = Caprasimo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caprasimo",
  display: "swap",
  preload: false,
});
import LayoutModals from "@/components/common/other-components/LayoutModals";
import Toolbar from "@/components/modals/Toolbar";

export const metadata: Metadata = {
  title: "Unimart — eCommerce Nextjs Template",
  description:
    "Unimart is a powerful Nextjs eCommerce template with 80+ home pages, Bootstrap 5, and full TypeScript support.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Unimart — eCommerce Nextjs Template",
    description:
      "Unimart is a powerful Nextjs eCommerce template with 80+ home pages, Bootstrap 5, and full TypeScript support.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unimart — eCommerce Nextjs Template",
    description:
      "Unimart is a powerful Nextjs eCommerce template with 80+ home pages, Bootstrap 5, and full TypeScript support.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cabin.variable} ${caveat.variable} ${bebasNeue.variable} ${caprasimo.variable}`}
      suppressHydrationWarning
    >
      <body className={cabin.className} suppressHydrationWarning>
        <BootstrapJsLoader />
        <LayoutEffectsLoader />
        <main id="main-content">{children}</main>
        <Toolbar />
        <LayoutModals />
      </body>
    </html>
  );
}
