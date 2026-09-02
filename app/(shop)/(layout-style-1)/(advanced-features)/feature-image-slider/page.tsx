import ElementsHero from "@/components/elements/ElementsHero";
import ImageCompare from "@/components/products/ImageCompare";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Shop Image Slider || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};

export default function page() {
  return (
    <>
      <ElementsHero
        title={
          <>
            Exclusive <span>Image Slider</span>
          </>
        }
      />
      <ImageCompare />
    </>
  );
}
