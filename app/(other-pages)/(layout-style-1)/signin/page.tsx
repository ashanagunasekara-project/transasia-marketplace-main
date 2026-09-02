import Signin from "@/components/other-pages/Signin";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Sign in to your Unimart account.",
};

export default function page() {
  return (
    <>
      <Signin />
    </>
  );
}
