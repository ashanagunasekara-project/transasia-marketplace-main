import { UnimartLogoIcon } from "../../../../components/svg-icons";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maintenance || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart is temporarily down for scheduled maintenance.",
};

export default function page() {
  return (
    <>
      <div className="rbt-component-area rbt-error-area rbt-section-gapBottom rbt-bg-color-gray-light">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="rbt-error-content pt--40 pb--40">
                <Image
                  className="error-maintance-shape"
                  alt="background shape"
                  src="/assets/images/error/error-shape-2.webp"
                  width={321}
                  height={240}
                />
                <h3 className="rbt-error-subtitle">We&apos;ll be back soon!</h3>
                <p className="rbt-error-description error-maintanance-description">
                  We sincerely apologize for the inconvenience. Our site is
                  currently undergoing scheduled maintenance and upgrades, but
                  will return shortly.
                </p>
                <h6 className="rbt-text-semi-bold">
                  Thank you for your patience
                </h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex mx-auto">
              <div className="rbt-fshape-box-outline-bottom-style rbt-bg-color-white">
                <div className="rbt-svg-bottom-portion">
                  <UnimartLogoIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
