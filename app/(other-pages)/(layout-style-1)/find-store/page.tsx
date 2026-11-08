import Breadcrumb from "@/components/other-pages/find-location/Breadcrumb";
import FindLocations from "@/components/other-pages/find-location/FindLocations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Store || Transasia - Electronics Store",
  description: "Locate Transasia Cellular official stores in Colombo and Kurunegala.",
};

export default function page() {
  return (
    <>
      <Breadcrumb />
      <div className="pb--80">
        <FindLocations />
      </div>
    </>
  );
}
