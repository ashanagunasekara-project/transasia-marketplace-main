import Signup from "@/components/other-pages/Signup";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Create your Unimart customer account.",
};

export default function page() {
  return (
    <>
      <Signup />
    </>
  );
}
