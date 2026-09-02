import ForgotPassword from "@/components/other-pages/ForgotPassword";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Forgot Password || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Recover access to your Unimart account.",
};

export default function page() {
  return (
    <>
      <ForgotPassword />
    </>
  );
}
