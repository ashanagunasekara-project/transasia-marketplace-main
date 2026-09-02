'use client'
import { WaveThinIcon } from '../../svg-icons';
import Image from "next/image";

export default function Contact2() {
  return (
    <div className="rbt-component-area rbt-section-gap rbt-bg-color-gray-light">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row row--12">
              <div className="col-12 col-lg-8">
                <form onSubmit={(e) => e.preventDefault()} className="rbt-contact-form">
                  <div className="rbt-fshape-box-outline-style">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="rbt-component-section-title rbt-contact-form-title rbt-bg-color-white">
                          <h6 className="rbt-title h6">
                            <span className="rbt-bold--text">Get in Touch</span>
                          </h6>
                          <span className="rbt-fshape-right-portion">
                            <WaveThinIcon />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="rbt-fshape-box rbt-bg-color-white rbt-contact-form-fshape">
                      <div className="row">
                        <div className="col-md-6 col-12 mb--16">
                          <div className="rbt-input-field-grp">
                            <label htmlFor="f_name">First Name</label>
                            <input
                              className="rbt-contact-input-field"
                              type="text"
                              id="f_name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-12 mb--16">
                          <div className="rbt-input-field-grp">
                            <label htmlFor="l_name">Last Name</label>
                            <input
                              className="rbt-contact-input-field"
                              type="text"
                              id="l_name"
                            />
                          </div>
                        </div>
                        <div className="col-12 mb--16">
                          <div className="rbt-input-field-grp">
                            <label htmlFor="email">Email Address</label>
                            <input
                              className="rbt-contact-input-field"
                              type="email"
                              id="email"
                            />
                          </div>
                        </div>
                        <div className="col-12 mb--16">
                          <div className="rbt-input-field-grp">
                            <label htmlFor="message">Your Message</label>
                            <textarea
                              className="rbt-contact-input-field"
                              name="message"
                              id="message"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-content-md-end mt--8">
                          <button type="submit" className="rbt-btn rbt-btn-md">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-12 col-lg-4">
                <div className="rbt-sidebar rbt-contact-form-sidebar">
                  <div className="inner">
                    <div className="rbt-title">
                      <h6 className="rbt-bold--text rbt-text-color-gray-700 mb--8">
                        Need a Help?
                      </h6>
                      <p className="rbt-contact-form-sidebar-text rbt-text-color-gray-500 mb--24">
                        we are available 20/7 day 365 always
                      </p>
                    </div>
                    <ul className="rbt-contact-sidebar-social-list">
                      <li>
                        <a href="tel:+2085550112">
                          <span className="icon phone">
                            <i className="fa-sharp fa-solid fa-phone" />
                          </span>
                          <span>(208) 555-0112</span>
                        </a>
                      </li>
                      <li>
                        <a href="mailto:unimartabc@mail.com">
                          <span className="icon email">
                            <i className="fa-sharp fa-solid fa-envelope" />
                          </span>
                          <span>unimartabc@mail.com</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon whatsapp">
                            <i className="fa-brands fa-whatsapp" />
                          </span>
                          <span>Whatsapp</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon pinterest">
                            <i className="fa-brands fa-pinterest-p" />
                          </span>
                          <span>Pinterest</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="thumbnail mt--24">
                  <Image
                    className="rbt-rounded--12"
                    alt="Contact Image"
                    src="/assets/images/about/about-10.webp"
                    width={816}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
