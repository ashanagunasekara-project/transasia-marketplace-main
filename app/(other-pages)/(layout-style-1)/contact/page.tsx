import Breadcrumb from "@/components/other-pages/Breadcrumb";
import ContactSection from "@/components/other-pages/contact/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Trans Asia Cellular",
  description:
    "Get in touch with Trans Asia Cellular. Visit our Colombo and Kurunegala store branches or reach out to us online.",
};

export default function page() {
  return (
    <>
      <Breadcrumb />
      <ContactSection />
    </>
  );
}
