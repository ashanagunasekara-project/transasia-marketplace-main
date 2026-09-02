import IntroVideo from "@/components/other-pages/team/IntroVideo";
import Team2 from "@/components/other-pages/team/Team2";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team Page 02 || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Second team page layout highlighting Unimart team members.",
};

export default function page() {
  return (
    <>
      <Team2 />
      <IntroVideo />
    </>
  );
}
