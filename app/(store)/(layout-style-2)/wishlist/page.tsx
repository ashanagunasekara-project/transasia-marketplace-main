import Wishlist from "@/components/store/Wishlist";
import Breadcrumb from "@/components/common/other-components/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wishlist || Transasia - Electronics Store",
  description: "Transasia Electronics Store - View and manage your saved wishlist items.",
};
export default function page() {
  return (
    <>
      <Breadcrumb title="Wishlist" subtitle="Products" />
      <Wishlist />
    </>
  );
}
