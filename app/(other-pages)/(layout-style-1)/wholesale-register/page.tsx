import Signup from "@/components/other-pages/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wholesale Registration | TransAsia E-Commerce",
  description: "Register for TransAsia wholesale account to unlock verified wholesale tier pricing.",
};

export default function WholesaleRegisterPage() {
  return (
    <>
      <Signup />
    </>
  );
}
