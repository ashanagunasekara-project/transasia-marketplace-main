import { Metadata } from "next";
import SaleProducts from "@/components/elements/element-sale-products/SaleProducts";
import ElementsHero from "@/components/elements/ElementsHero";
export const metadata: Metadata = {
  title:
    "Element Sale Products | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function ElementSaleProductsPage() {
  return (
    <>
      <>
        <ElementsHero
          title={
            <>
              Exclusive <span>Sale Products</span>
            </>
          }
        />
        <SaleProducts />
      </>
    </>
  );
}
