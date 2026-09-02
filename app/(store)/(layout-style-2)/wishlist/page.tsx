import Wishlist from "@/components/store/Wishlist";
import Breadcrumb from "@/components/common/other-components/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wishlist || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Breadcrumb title="Wishlist" subtitle="Products" />
      <Wishlist />
    </>
  );
}
