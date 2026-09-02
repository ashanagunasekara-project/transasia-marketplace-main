import Image from "next/image";
import Link from "next/link";
export default function Banner() {
  return (
    <div className="rbt-component-area rbt-about-area rbt-section-gap2Top rbt-section-gap2Bottom">
      <div className="container">
        <div className="rbt-list-card-box rbt-border-color-primary p--48 p_sm--24 p_md--32">
          <div className="row row--8 align-items-center">
            <div className="col-lg-6 order-2">
              <div className="rbt-about-feature-area">
                <div className="inner">
                  <div className="section-title text-start">
                    <span className="rbt-card-subtitle">
                      Infinitely rechargeable
                    </span>
                    <h3 className="rbt-title mb--16 rbt-text-medium">
                      <span className="rbt-text-bold d-block">
                        Pour Un Homme de Carbon -
                      </span>
                      Limited Edition Box
                    </h3>
                    <p className="b1 rbt-text-color-gray-600 mb--24">
                      When, while the lovely valley teems with vapour around,
                      meridian sun strikes the upper surface of the impenetrable
                      foliage of my trees, and a tall grass by the trickling
                      stream.
                    </p>
                    <div className="read-more-btn">
                      <Link className="rbt-btn" href={`/about`}>
                        Know About Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1">
              <div className="rbt-image-portion">
                <Image
                  className="w-100"
                  alt="About Images"
                  src="/assets/images/about/about-image-pr-01.webp"
                  width={1226}
                  height={900}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
