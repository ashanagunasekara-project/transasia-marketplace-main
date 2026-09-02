import Link from "next/link";
import Image from "next/image";
import { portfolioGridThreeItems } from "@/data/portfolios";
function PortfolioGridThreeColoumn() {
  return (
    <>
      <div className="rbt-team-area rbt-bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">
                    Portfolio Grid Three Column
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row row--12">
            {portfolioGridThreeItems.map((item, idx) => (
              <div
                key={`${item.title}-${item.img}-${idx}`}
                className="col-lg-4 col-xl-4 col-xxl-4 col-md-6 col-sm-6 col-6 mt--24 mt_sm--16"
              >
                <div className="rainbow-card rbt-portfolio-card">
                  <div className="inner">
                    <div className="thumbnail">
                      <figure className="card-image">
                        <Link href="/portfolio-details">
                          <Image
                            alt={item.title}
                            src={item.img}
                            width={2170}
                            height={2170}
                          />
                        </Link>
                      </figure>
                      <Link
                        className="rainbow-overlay"
                        href="/portfolio-details"
                      />
                    </div>
                    <div className="content">
                      <h5 className="title mb--10">
                        <Link href="/portfolio-details">{item.title}</Link>
                      </h5>
                      <span className="subtitle b2">{item.subtitle}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioGridThreeColoumn;
