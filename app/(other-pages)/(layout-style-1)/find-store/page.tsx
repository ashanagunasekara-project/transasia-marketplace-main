import Breadcrumb from "@/components/other-pages/find-location/Breadcrumb";
import FindLocations from "@/components/other-pages/find-location/FindLocations";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Store || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Locate nearby Unimart stores and view them on the map.",
};

export default function page() {
  return (
    <>
      <Breadcrumb />
      <FindLocations />
      <div className="rbt-component-area rbt-section-gap2Bottom">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="rbt-google-map bg-color-white">
                <iframe
                  className="w-100"
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
                  height={600}
                  style={{ border: 0 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
