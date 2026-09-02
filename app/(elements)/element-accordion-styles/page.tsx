import { Metadata } from "next";
import AccordionBlock01 from "@/components/elements/element-accordion-styles/AccordionBlock01";
import AccordionBlock02 from "@/components/elements/element-accordion-styles/AccordionBlock02";
import AccordionBlock03 from "@/components/elements/element-accordion-styles/AccordionBlock03";
import AccordionBlock04 from "@/components/elements/element-accordion-styles/AccordionBlock04";
import ElementsHero from "@/components/elements/ElementsHero";
export const metadata: Metadata = {
  title:
    "Element Accordion Styles | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function ElementAccordionStylesPage() {
  return (
    <>
      <ElementsHero
        title={
          <>
            Exclusive <span>Accordion Styles</span>
          </>
        }
      />
      <AccordionBlock01 />
      <AccordionBlock02 />
      <AccordionBlock03 />
      <AccordionBlock04 />
    </>
  );
}
