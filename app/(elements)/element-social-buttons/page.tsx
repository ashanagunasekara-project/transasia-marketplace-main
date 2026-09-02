import { Metadata } from "next";
import SocialButtonOne from "@/components/elements/element-social-buttons/SocialButtonOne";
import SocialButtonTwo from "@/components/elements/element-social-buttons/SocialButtonTwo";
import SocialButtonThree from "@/components/elements/element-social-buttons/SocialButtonThree";
import SocialButtonFour from "@/components/elements/element-social-buttons/SocialButtonFour";
import SocialButtonFive from "@/components/elements/element-social-buttons/SocialButtonFive";
import SocialButtonSix from "@/components/elements/element-social-buttons/SocialButtonSix";
import SocialButtonSeven from "@/components/elements/element-social-buttons/SocialButtonSeven";
import ElementsHero from "@/components/elements/ElementsHero";
export const metadata: Metadata = {
  title:
    "Element Social Buttons | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function ElementSocialButtonsPage() {
  return (
    <>
      <>
        <ElementsHero
          title={
            <>
              Exclusive <span>Social Buttons</span>
            </>
          }
        />
        <SocialButtonOne />
        <SocialButtonTwo />
        <SocialButtonThree />
        <SocialButtonFour />
        <SocialButtonFive />
        <SocialButtonSix />
        <SocialButtonSeven />
      </>
    </>
  );
}
