import { ExternalLinkIcon } from '../../svg-icons';
function Marquee() {
  return (
    <>
      <div className="rbt-button-area rbt-section-gapBottom rbt-bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">Marquee</span>
                <h2 className="title">Marquee Button</h2>
              </div>
            </div>
          </div>
          <div className="row rbt-section-gap3Top">
            <div className="col-lg-12">
              <div className="rbt-button-group">
                <a
                  href={`/#rbt-demo-presentation-section`}
                  className="rbt-btn-grp rbt-has-separator-shape justify-content-center rbt-scroll-trigger fade_in animation-order-2"
                >
                  <span className="rbt-btn rbt-btn-single rbt-btn rbt-marquee-btn marquee-auto rbt-btn-md has-primary-overlay has-no-hover-transform">
                    <span data-text="View All The Trending Collection">
                      VIEW ALL DEMOS (80+) New drops every month 🔥
                    </span>
                  </span>
                  <span className="rbt-btn rbt-btn-single animated-icon-btn round-sm default-primary-bg p--0">
                    <span className="animated-icon">
                      <ExternalLinkIcon />
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Marquee;
