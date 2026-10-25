import CheckoutComplete from "@/components/store/CheckoutComplete";
import Breadcrumb from "@/components/common/other-components/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout Thank You || TransAsia",
  description: "TransAsia E-Commerce Platform - Order Confirmation",
};

export default function page() {
  return (
    <>
      <Breadcrumb title="Checkout Thank You" subtitle="Checkout" />
      <CheckoutComplete />
    </>
  );
}
