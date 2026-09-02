import { Metadata } from "next";
import CountdownStyleOne from "@/components/elements/element-countdown-styles/CountdownStyleOne";
import CountdownStyleTwo from "@/components/elements/element-countdown-styles/CountdownStyleTwo";
import CountdownStyleThree from "@/components/elements/element-countdown-styles/CountdownStyleThree";
import CountdownStyleFour from "@/components/elements/element-countdown-styles/CountdownStyleFour";
import CountdownStyleFive from "@/components/elements/element-countdown-styles/CountdownStyleFive";
import CountdownStyleSix from "@/components/elements/element-countdown-styles/CountdownStyleSix";
import CountdownStyleSeven from "@/components/elements/element-countdown-styles/CountdownStyleSeven";
import ElementsHero from "@/components/elements/ElementsHero";
export const metadata: Metadata = {
  title:
    "Element Countdown Styles | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function ElementCountdownStylesPage() {
  return (
    <>
      <>
        <ElementsHero
          title={
            <>
              Exclusive <span>Countdown Styles</span>
            </>
          }
        />
        <CountdownStyleOne />
        <CountdownStyleTwo />
        <CountdownStyleThree />
        <CountdownStyleFour />
        <CountdownStyleFive />
        <CountdownStyleSix />
        <CountdownStyleSeven />
      </>
    </>
  );
}
