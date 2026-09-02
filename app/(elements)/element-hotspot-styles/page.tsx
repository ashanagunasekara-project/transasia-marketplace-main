import { Metadata } from "next";
import HotspotStyleOne from "@/components/elements/element-hotspot-styles/HotspotStyleOne";
import HotspotStyleTwo from "@/components/elements/element-hotspot-styles/HotspotStyleTwo";
import HotspotStyleThree from "@/components/elements/element-hotspot-styles/HotspotStyleThree";
import HotspotStyleFour from "@/components/elements/element-hotspot-styles/HotspotStyleFour";
import HotspotStyleFive from "@/components/elements/element-hotspot-styles/HotspotStyleFive";
import ElementsHero from "@/components/elements/ElementsHero";
export const metadata: Metadata = {
  title:
    "Element Hotspot Styles | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function ElementHotspotStylesPage() {
  return (
    <>
      <>
        <ElementsHero
          title={
            <>
              Exclusive <span>Hotspot Styles</span>
            </>
          }
        />
        <HotspotStyleOne />
        <HotspotStyleTwo />
        <HotspotStyleThree />
        <HotspotStyleFour />
        <HotspotStyleFive />
      </>
    </>
  );
}
