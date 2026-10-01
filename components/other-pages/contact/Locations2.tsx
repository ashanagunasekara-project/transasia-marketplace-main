export default function Locations2() {
  return (
    <div className="rbt-component-area pt--40 pb--32 rbt-bg-color-gray-light">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row row--12 mt_dec--24">
              {/* Start single location card */}
              <div className="col-12 col-md-6 col-lg-4 mt--24">
                <div className="rbt-location-card rbt-curved-style-box">
                  <div className="inner">
                    <span className="rbt-location-icon">
                      <i className="fa-sharp fa-solid fa-location-dot" />
                    </span>
                    <h6 className="rbt-location-card-title">Colombo Store</h6>
                    <p className="rbt-location-card-text">
                      61 1st Cross St, Colombo 00110
                    </p>
                    <ul className="rbt-contact-info-list">
                      <li>
                        <span>Phone : </span>
                        <a
                          href="tel:+94773392727"
                          className="rbt-contact-info-single color-primary"
                        >
                          +94773 392 727
                        </a>
                      </li>
                      <li>
                        <span>Email : </span>
                        <a
                          href="mailto:[EMAIL_ADDRESS]"
                          className="rbt-contact-info-single color-primary"
                        >
                          [EMAIL_ADDRESS]
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End single location card */}
              {/* Start single location card */}
              <div className="col-12 col-md-6 col-lg-4 mt--24">
                <div className="rbt-location-card rbt-curved-style-box">
                  <div className="inner">
                    <span className="rbt-location-icon">
                      <i className="fa-sharp fa-solid fa-location-dot" />
                    </span>
                    <h6 className="rbt-location-card-title">Kurunegala Store</h6>
                    <p className="rbt-location-card-text">
                      19 Katugastota-Kurunegala-Puttalam Hwy, Kurunegala
                    </p>
                    <ul className="rbt-contact-info-list">
                      <li>
                        <span>Phone : </span>
                        <a
                          href="tel:+94662234128"
                          className="rbt-contact-info-single color-primary"
                        >
                          +94662 234 128
                        </a>
                      </li>
                      <li>
                        <span>Email : </span>
                        <a
                          href="mailto:[EMAIL_ADDRESS]"
                          className="rbt-contact-info-single color-primary"
                        >
                          [EMAIL_ADDRESS]
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End single location card */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
