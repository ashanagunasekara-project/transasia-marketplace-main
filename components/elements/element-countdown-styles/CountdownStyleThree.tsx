import Countdown from "@/components/common/ui/Countdown";

function CountdownStyleThree() {
  return (
    <>
      <div className="rbt-component-area rbt-countdown-area rbt-section-gap rbt-bg-color-gray-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h4 className="rbt-title">
                  Countdown Style{" "}
                  <span className="rbt-bold--text">Two Four</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="row row--12 mt_dec--24">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt--24 d-flex justify-content-center">
              <div className="rbt-countdown-sections d-flex justify-content-center align-items-center">
                <div className="rbt-countdown-one bg-variation-primary">
                  <Countdown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountdownStyleThree;
