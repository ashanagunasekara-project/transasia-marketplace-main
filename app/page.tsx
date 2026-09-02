import SplashPage from "./splash/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preview || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function Home() {
  return (
    <>
      <SplashPage />
    </>
  );
}
