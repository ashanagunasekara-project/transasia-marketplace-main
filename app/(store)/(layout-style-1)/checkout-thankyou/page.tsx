import CheckoutComplete from "@/components/store/CheckoutComplete";
import Breadcrumb from "@/components/common/other-components/Breadcrumb";
import Testimonials from "@/components/homes/home-phone-case/Testimonials";
import SimilerProducts from "@/components/product-details/others/SimilerProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Checkout Thank You || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Breadcrumb title="Checkout Thank You" subtitle="Checkout" />
      <CheckoutComplete />
      <Testimonials />
      <SimilerProducts parentClass="rbt-component-area rbt-section-gap rbt-bg-color-gray-white" />
    </>
  );
}
