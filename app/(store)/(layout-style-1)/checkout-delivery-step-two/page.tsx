import Breadcrumb from "@/components/common/other-components/Breadcrumb";
import Testimonials from "@/components/homes/home-phone-case/Testimonials";
import SimilerProducts from "@/components/product-details/others/SimilerProducts";
import Checkout2 from "@/components/store/Checkout2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Checkout Delivery Step Two || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};

export default function page() {
  return (
    <>
      <Breadcrumb title="Checkout Delivery Step Two" subtitle="Checkout" />
      <Checkout2 />
      <Testimonials />
      <SimilerProducts parentClass="rbt-component-area rbt-section-gap rbt-bg-color-gray-white" />
    </>
  );
}
