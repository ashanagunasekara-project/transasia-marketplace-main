import { Metadata } from "next";
import CompareTableOne from "@/components/elements/element-table-styles/CompareTableOne";
import ElementsHero from "@/components/elements/ElementsHero";
export const metadata: Metadata = {
  title:
    "Element Table Styles | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function ElementTableStylesPage() {
  return (
    <>
      <>
        <ElementsHero
          title={
            <>
              Exclusive <span>Table Styles</span>
            </>
          }
        />
        <CompareTableOne />
      </>
    </>
  );
}
