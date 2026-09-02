import { Metadata } from "next";
import BrandsStyle01 from "@/components/elements/element-brands/BrandsStyle01";
import BrandsStyle02 from "@/components/elements/element-brands/BrandsStyle02";
import BrandsStyle03 from "@/components/elements/element-brands/BrandsStyle03";
import BrandsStyle04 from "@/components/elements/element-brands/BrandsStyle04";
import ElementsHero from "@/components/elements/ElementsHero";
export const metadata: Metadata = {
  title:
    "Element Brands | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function ElementBrandsPage() {
  return (
    <>
      <>
        <ElementsHero
          title={
            <>
              Exclusive <span>Brands</span>
            </>
          }
        />
        {/* Start Component Area */}
        <BrandsStyle01 />
        {/* End Component Area */}
        <BrandsStyle02 />
        <BrandsStyle03 />
        <BrandsStyle04 />
      </>
    </>
  );
}
