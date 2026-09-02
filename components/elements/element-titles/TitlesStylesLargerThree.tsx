import Link from "next/link";

function TitlesStylesLargerThree() {
  return (
    <>
      <div className="rbt-component-area rbt-bg-color-white rbt-section-gap2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rbt-exclusive-section-title mb--0 text-end">
                <div className="icons rbt-scroll-trigger fade_in animation-order-1 justify-content-end">
                  <span>
                    <i className="fa-regular fa-laptop rbt-text-color-black" />
                  </span>
                  <span>
                    <i className="fa-regular fa-tablet rbt-text-color-black" />
                  </span>
                  <span>
                    <i className="fa-regular fa-mobile rbt-text-color-black" />
                  </span>
                </div>
                <h2 className="rbt-title mb--24">
                  <span className="rbt-bold--text rbt-scroll-trigger fade_in animation-order-2">
                    Titles Styles larger
                    <br />
                  </span>
                  <span className="rbt-title-sm-text rbt-scroll-trigger fade_in animation-order-3">
                    With Top Part Exclusive Icons
                  </span>
                </h2>
                <p className="mb--40 b1 rbt-scroll-trigger fade_in animation-order-4">
                  Effortlessly tailor your experience with intuitive
                  customization options, <br />
                  empowering you to personalize every aspect of your website.
                </p>
                <Link
                  href={`/header-builder`}
                  className="rbt-btn exclusive-btn icon-reverse-left rbt-scroll-trigger fade_in animation-order-5"
                  target="_blank"
                >
                  <span className="icon-left">
                    <i className="fa-sharp fa-regular fa-arrow-right mr--4" />
                  </span>
                  <span>Header Builder Overview</span>
                  <span className="icon-right">
                    <i className="fa-regular fa-up-right-from-square ml--4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TitlesStylesLargerThree;
