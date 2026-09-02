import FooterNewsletterForm from "../../footers/FooterNewsletterForm";

export default function Newsletter() {
  return (
    <div className="rbt-newsletter-area style--one rbt-bg-color-primary">
      <div className="container">
        <div className="row row--12 mt_dec--24 align-items-center">
          <div className="col-lg-8 mt--24 justify-content-center justify-content-md-start d-flex">
            <div className="rbt-newsletter-content-wrapper">
              <h2 className="title">
                Subscribe our <span>newsletter</span>
              </h2>
              <p className="sub-title">Subscribe and get discount 20% Off</p>
            </div>
          </div>
          <div className="col-lg-4 mt--24 d-flex justify-content-center justify-content-md-end text-center text-md-left d-flex">
            <FooterNewsletterForm
              formClass="rbt-newsletter-form-one rbt-max-w-full w-100 radius-round"
              btnClass="rbt-btn rbt-btn-md"
              placeholder="Enter your email address"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
