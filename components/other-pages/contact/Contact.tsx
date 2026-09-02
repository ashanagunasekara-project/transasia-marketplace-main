import {
  PhoneReceiverIcon,
  PaperPlaneIcon,
  MessengerIcon,
  EnvelopeIcon,
} from "../../svg-icons";
import Tooltip from "@/components/common/ui/Tooltip";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="rbt-component-area rbt-bg-color-gray-light">
      <div className="container">
        <div className="row row--24 row--16 mt_dec--24">
          <div className="col-12 col-xl-6 mt--24">
            <div className="rbt-component-section-title rbt-gap--4 mb--24 p-0 border-0 text-left">
              <h2 className="rbt-title h1 rbt-scroll-trigger fade_in animation-order-2 mb--16">
                <span className="rbt-bold--text">Contact Us </span>
              </h2>
              <p className="desc mb--0">
                Email, call, or complete the form to learn how Snappy can solve
                your messaging problem.
              </p>
            </div>
            <div className="rbt-btn-grp justify-content-between rbt-gap--16 flex-wrap">
              {/* Call via Phone */}
              <Tooltip content="Call via Phone" placement="top">
                <a
                  href="tel:+958445612564"
                  className="rbt-trns-modern-btn tooltips"
                >
                  <span className="icon">
                    <PhoneReceiverIcon />
                  </span>
                  +9584 4561 2564
                </a>
              </Tooltip>
              {/* Call via WhatsApp */}
              <Tooltip content="Email to" placement="top">
                <a
                  href="mailto:unimartabc@mail.com"
                  className="rbt-trns-modern-btn tooltips"
                >
                  <span className="icon">
                    <EnvelopeIcon />
                  </span>
                  unimartabc@mail.com
                </a>
              </Tooltip>
              {/* Call via Telegram */}
              <Tooltip content="Call via Telegram" placement="top">
                <a
                  href="https://t.me/+958445612564"
                  target="_blank"
                  className="rbt-trns-modern-btn tooltips"
                >
                  <span className="icon">
                    <PaperPlaneIcon />
                  </span>
                  Telegram
                </a>
              </Tooltip>
              {/* Call via Signal */}
              <Tooltip content="Call via Messenger" placement="top">
                <a
                  href="http://m.me/USERNAME"
                  target="_blank"
                  className="rbt-trns-modern-btn tooltips"
                >
                  <span className="icon">
                    <MessengerIcon />
                  </span>
                  Messenger
                </a>
              </Tooltip>
            </div>
            <div className="row row--16 mt--24 mt_sm--0 mt_md--0">
              {/* Start single location card */}
              <div className="col-12 col-md-6 col-lg-6 mt--24">
                <div className="rbt-location-card style-two">
                  <div className="inner">
                    <h6 className="rbt-location-card-title">
                      <i className="fa-sharp fa-regular fa-location-dot mr--4" />
                      Broadway Store
                    </h6>
                    <p className="rbt-location-card-text">
                      1260 Broadway, San Franci, CA 94109
                    </p>
                    <ul className="rbt-contact-info-list">
                      <li>
                        <span>Phone : </span>
                        <a
                          href="tel:+2085550112"
                          className="rbt-contact-info-single color-primary"
                        >
                          (208) 555-0112
                        </a>
                      </li>
                      <li>
                        <span>Email : </span>
                        <a
                          href="mailto:unimartabc@mail.com"
                          className="rbt-contact-info-single color-primary"
                        >
                          unimartabc@mail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End single location card */}
              {/* Start single location card */}
              <div className="col-12 col-md-6 col-lg-6 mt--24">
                <div className="rbt-location-card style-two">
                  <div className="inner">
                    <h6 className="rbt-location-card-title">
                      <i className="fa-sharp fa-regular fa-location-dot mr--4" />
                      Valencia Store
                    </h6>
                    <p className="rbt-location-card-text">
                      1260 Broadway, San Franci, CA 94109
                    </p>
                    <ul className="rbt-contact-info-list">
                      <li>
                        <span>Phone : </span>
                        <a
                          href="tel:+2085550112"
                          className="rbt-contact-info-single color-primary"
                        >
                          (208) 555-0112
                        </a>
                      </li>
                      <li>
                        <span>Email : </span>
                        <a
                          href="mailto:unimartabc@mail.com"
                          className="rbt-contact-info-single color-primary"
                        >
                          unimartabc@mail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End single location card */}
              {/* Start single location card */}
              <div className="col-12 col-md-6 col-lg-6 mt--24">
                <div className="rbt-location-card style-two">
                  <div className="inner">
                    <h6 className="rbt-location-card-title">
                      <i className="fa-sharp fa-regular fa-location-dot mr--4" />
                      Emeryville Store
                    </h6>
                    <p className="rbt-location-card-text">
                      1260 Broadway, San Franci, CA 94109
                    </p>
                    <ul className="rbt-contact-info-list">
                      <li>
                        <span>Phone : </span>
                        <a
                          href="tel:+2085550112"
                          className="rbt-contact-info-single color-primary"
                        >
                          (208) 555-0112
                        </a>
                      </li>
                      <li>
                        <span>Email : </span>
                        <a
                          href="mailto:unimartabc@mail.com"
                          className="rbt-contact-info-single color-primary"
                        >
                          unimartabc@mail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End single location card */}
              {/* Start single location card */}
              <div className="col-12 col-md-6 col-lg-6 mt--24">
                <div className="rbt-location-card style-two">
                  <div className="inner">
                    <h6 className="rbt-location-card-title">
                      <i className="fa-sharp fa-regular fa-location-dot mr--4" />
                      Alameda Store
                    </h6>
                    <p className="rbt-location-card-text">
                      1260 Broadway, San Franci, CA 94109
                    </p>
                    <ul className="rbt-contact-info-list">
                      <li>
                        <span>Phone : </span>
                        <a
                          href="tel:+2085550112"
                          className="rbt-contact-info-single color-primary"
                        >
                          (208) 555-0112
                        </a>
                      </li>
                      <li>
                        <span>Email : </span>
                        <a
                          href="mailto:unimartabc@mail.com"
                          className="rbt-contact-info-single color-primary"
                        >
                          unimartabc@mail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End single location card */}
            </div>
          </div>
          <div className="col-12 col-xl-6 mt--24">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
