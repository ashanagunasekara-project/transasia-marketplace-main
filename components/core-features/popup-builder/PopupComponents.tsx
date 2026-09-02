import Image from "next/image";
import { popupVariations } from "@/data/splash";

function PopupComponents() {
  return (
    <>
      <div className="rbt-splash-element-builder-area splash-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rbt-splash-section-title text-center mb--48">
                <h2 className="mb--12">
                  <span className="rbt-bold--text rbt-scroll-trigger fade_in animation-order-2">
                    10+ Pre-built Popup &amp; Sidebar
                  </span>
                </h2>
                <p className="mb--40 b1 rbt-scroll-trigger fade_in animation-order-4">
                  Choose from a variety of pre-built popups and <br />
                  sidebars to display your content.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-xl-10 mx-auto">
              <div className="row row--12 mt_dec--24">
                {popupVariations.map((item) => {
                  if (item.isSmall) {
                    return (
                      <div key={item.id} className="col-12 col-md-6 mt--24">
                        <div className="rbt-ele-builder-card rbt-element-coming-soon">
                          <div className="rbt-card-content text-center">
                            <div className="content-inner">
                              <span className="overlay-text">{item.count}</span>
                              <h2 className="rbt-title rbt-text-bold">
                                {item.title}
                              </h2>
                              <p className="rbt-description">{item.desc}</p>
                            </div>
                          </div>
                          <div className="ele-layout-display">
                            <figure className="ele-image">
                              {item.videoSrc ? (
                                <video
                                  src={item.videoSrc}
                                  autoPlay
                                  loop
                                  muted
                                  playsInline
                                  preload="metadata"
                                />
                              ) : (
                                <Image
                                  alt="Element Image"
                                  src={item.imgSrc || ""}
                                  width={item.imgWidth || 1000}
                                  height={item.imgHeight || 1000}
                                />
                              )}
                            </figure>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  const cardClass = `rbt-ele-builder-card rbt-element-coming-soon card-content-side ${
                    item.contentRight ? "rbt-content-right" : ""
                  }`;

                  return (
                    <div key={item.id} className="col-12 mt--24">
                      <div className={cardClass}>
                        {item.contentRight && (
                          <div className="ele-layout-display">
                            <figure className="ele-image">
                              <Image
                                alt="Element Image"
                                src={item.imgSrc || ""}
                                width={item.imgWidth || 1000}
                                height={item.imgHeight || 1000}
                              />
                            </figure>
                          </div>
                        )}
                        <div className="rbt-card-content">
                          <div className="content-inner">
                            <span className="overlay-text">{item.count}</span>
                            <h2 className="rbt-title rbt-text-bold">
                              {item.title}
                            </h2>
                            <p className="rbt-description">{item.desc}</p>
                            {item.href && (
                              <div className="mt--32">
                                <a
                                  href={item.href}
                                  className="rbt-btn rbt-btn-md rbt-btn-secondary"
                                >
                                  Check example
                                </a>
                                <a
                                  href={item.href}
                                  className="rbt-btn-link rbt-text-color-gray-500 ml--8"
                                >
                                  <span className="btn-icon">
                                    <i className="fa-regular fa-book mr--4" />
                                  </span>
                                  <span className="btn-text">View Docs</span>
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                        {!item.contentRight && (
                          <div className="ele-layout-display">
                            <figure className="ele-image">
                              <Image
                                alt="Element Image"
                                src={item.imgSrc || ""}
                                width={item.imgWidth || 1000}
                                height={item.imgHeight || 1000}
                              />
                            </figure>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopupComponents;
