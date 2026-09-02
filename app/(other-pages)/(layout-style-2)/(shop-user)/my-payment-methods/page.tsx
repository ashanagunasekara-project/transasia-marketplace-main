import PaymentMethods from "@/components/other-pages/shop-user/PaymentMethods";
import Breadcrumb from "@/components/common/other-components/Breadcrumb";
import Sidebar from "@/components/other-pages/shop-user/Sidebar";
import AddPaymentMethod from "@/components/modals/AddPaymentMethod";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "My Payment Methods || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Manage your saved Unimart payment methods and cards.",
};

export default function page() {
  return (
    <>
      <Breadcrumb
        className="rbt-breadcrumb-two rbt-bg-color-gray-100"
        title="My Payment Methods"
        subtitle="Profile"
      />
      <div className="rbt-component-area rbt-section-gap rbt-bg-color-gray-light">
        <div className="container">
          <div className="row row--12 mt_dec--24">
            <div className="col-12 col-md-12 col-lg-4 col-xl-3 mt--24">
              <Sidebar />
            </div>
            <div className="col-12 col-md-12 col-lg-8 col-xl-9 mt--24">
              <PaymentMethods />
            </div>
          </div>
        </div>
      </div>
      <AddPaymentMethod />
    </>
  );
}
