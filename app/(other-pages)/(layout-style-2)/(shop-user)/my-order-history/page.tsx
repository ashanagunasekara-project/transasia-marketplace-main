import Orders from "@/components/other-pages/shop-user/Orders";
import Breadcrumb from "@/components/common/other-components/Breadcrumb";
import Sidebar from "@/components/other-pages/shop-user/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "My Order History || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "View your full Unimart order history and details.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "My Order History | Unimart",
    description: "View your full Unimart order history and details.",
    type: "website",
  },
};

export default function page() {
  return (
    <>
      <Breadcrumb
        className="rbt-breadcrumb-two rbt-bg-color-gray-100"
        title="My Order History"
        subtitle="Profile"
      />
      <div className="rbt-component-area rbt-section-gap rbt-bg-color-gray-light">
        <div className="container">
          <div className="row row--12 mt_dec--24">
            <div className="col-12 col-md-12 col-lg-4 col-xl-3 mt--24">
              <Sidebar />
            </div>
            <div className="col-12 col-md-12 col-lg-8 col-xl-9 mt--24">
              <Orders />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
