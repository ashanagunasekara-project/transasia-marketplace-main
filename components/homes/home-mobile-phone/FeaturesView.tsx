import Image from "next/image";
export default function FeaturesView() {
  return (
    <div className="rbt-component-area rbt-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title text-center border-0 p-0 mb--32 mb_sm--24 align-items-center">
              <a
                href="#"
                className="rbt-card-subtitle rbt-card-categories-text mt--0 rbt-scroll-trigger fade_in animation-order-1"
              >
                The Biggest View!
              </a>
              <h2 className="rbt-title h1 rbt-scroll-trigger fade_in animation-order-1">
                <span className="rbt-bold--text">
                  Largest Cover Display
                  <br />
                  with Amoled
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <figure>
              <Image
                alt="Banner Image"
                src="/assets/images/about/about-mobile-01.webp"
                width={1384}
                height={683}
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
