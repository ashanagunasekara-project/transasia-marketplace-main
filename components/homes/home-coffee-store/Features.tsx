import { timelineData } from "@/data/features";

import Image from "next/image";

export default function Features() {
  return (
    <div className="rbt-component-area rbt-timeline-area rbt-bg-color-white rbt-section-gap2Top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center flex-row align-items-end mb--40 flex-wrap rbt-gap--16">
            <div className="rbt-component-section-title rbt-gap--4 mb--0 p-0 border-0 text-center">
              <span className="rbt-card-subtitle h5 mt--0 rbt-scroll-trigger fade_in animation-order-1">
                Featured Packaging’s
              </span>
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                <span className="rbt-bold--text">Packaging That </span>New Brand
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 p-0">
            <div className="rbt-timeline rbt-timeline-style-one">
              {timelineData.map((item, index) => {
                const isEven = index % 2 !== 0;
                const animationOrder = `animation-order-${item.id}`;

                return (
                  <div
                    key={item.id}
                    className={`rbt-timeline-single-element rbt-scroll-trigger fade_in ${animationOrder}`}
                  >
                    {!isEven && (
                      <div
                        className={`rbt-timeline-image rbt-scroll-trigger zoom_in ${animationOrder}`}
                      >
                        <Image
                          alt="Ecommerce Timeline Image"
                          src={item.image}
                          width={1120}
                          height={660}
                        />
                      </div>
                    )}

                    <div className="rbt-timeline-content">
                      <span className="rbt-timeline-count-digit">
                        {item.id.toString().padStart(2, "0")}
                      </span>
                      <div className="rbt-timeline-info">
                        <h3 className="rbt-timeline-title">{item.title}</h3>
                        <ul className="rbt-timeline-info-list">
                          {item.points.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {isEven && (
                      <div
                        className={`rbt-timeline-image rbt-scroll-trigger zoom_in ${animationOrder}`}
                      >
                        <Image
                          alt="Ecommerce Timeline Image"
                          src={item.image}
                          width={1120}
                          height={660}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
