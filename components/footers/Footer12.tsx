import Image from "next/image";
import Link from "next/link";
import InfoSection6 from "./footerSections/InfoSection6";
import { footerData, footerDataStores } from "../../data/footer";
import FooterNewsletterForm from "./FooterNewsletterForm";

export default function Footer12() {
  return (
    <>
      {/* Start Component Area */}
      <div className="rbt-component-area rbt-collapsible-content-section rbt-section-gap2 rbt-bg-color-white">
        <div className="container">
          <InfoSection6 />
        </div>
      </div>
      {/* End Component Area */}
      <footer className="rbt-footer rbt-footer-style-six rbt-bg-color-primary rbt-section-gap3 pb--24">
        <div className="p-0 rbt-footer-top">
          <div className="container">
            <h4 className="text-center mb--0 rbt-text-color-white">
              We Don&apos;t compromise on quality!
            </h4>
            <div className="rbt-separator-mid ptb--32">
              <hr className="rbt-separator m-0 rbt-separator-brand700 separator-height-1 has-opacity" />
            </div>
            <div className="row row--12 mt_dec--24 justify-content-between">
              {footerData.map((widget, index) => (
                <div
                  key={index}
                  className="col-lg-2 col-md-6 col-sm-6 col-12 mt--24"
                >
                  <div className="footer-widget rbt-link-hover">
                    <h5 className="ft-title">{widget.title}</h5>
                    <ul className="ft-link">
                      {widget.items.map((item, i) => (
                        <li key={i}>
                          <Link href={item.href}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <div className="col-lg-2 col-md-6 col-sm-6 col-12 mt--24">
                <div className="footer-widget rbt-link-hover">
                  <h5 className="ft-title">{footerDataStores.title}</h5>
                  <ul className="ft-link">
                    {footerDataStores.items.map((item, i) => (
                      <li key={i}>
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 col-md-7 col-sm-6 col-12 mt--24">
                <div className="footer-widget">
                  <h5 className="ft-title">Download App on Mobile:</h5>
                  <div className="rbt-app-store-area mt--24">
                    <ul className="rbt-app-store-list has-larger-img">
                      <li>
                        <a href="#">
                          <Image
                            alt="App Store"
                            src="/assets/images/footer/apple-store-logo.webp"
                            width={249}
                            height={80}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Image
                            alt="App Store"
                            src="/assets/images/footer/play-store-logo.webp"
                            width={271}
                            height={80}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-widget mt--32">
                  <h5 className="ft-title mb--8">Subscribe our newsletter</h5>
                  <ul className="ft-link">
                    <li>
                      <p>Subscribe and get discount 20% Off</p>
                    </li>
                  </ul>
                  <FooterNewsletterForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rbt-separator-mid pt--48 pb--24">
          <div className="container">
            <hr className="rbt-separator m-0 rbt-separator-brand700 separator-height-1 has-opacity" />
          </div>
        </div>
        {/* Start Copyright Area  */}
        <div className="copyright-area copyright-style-1 p-0">
          <div className="container">
            <div className="row row--12 mt_dec--24 align-items-center justify-content-between">
              <div className="col-md-6 col-12 mt--24 d-flex justify-content-center justify-content-md-start">
                <p className="rbt-link-hover text-center text-lg-start">
                  Copyright {new Date().getFullYear()} ®
                  <a href="https://rainbowthemes.net/" target="_blank"
                  rel="noopener noreferrer" className="mr--4">Unimart</a> Nextjs
                  Template.
                </p>
              </div>
              <div className="col-md-6 col-12 mt--24">
                <ul className="copyright-link rbt-link-hover justify-content-center justify-content-xl-end mt_sm--12 mt_md--0 mt_lg--0">
                  <li>
                    <Link href={`/return-policy`}>Refund policy</Link>
                  </li>
                  <li>
                    <Link href={`/privacy-policy`}>Privacy policy</Link>
                  </li>
                  <li>
                    <Link href={`/terms-policy`}>Terms &amp; conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End Copyright Area  */}
      </footer>
    </>
  );
}
