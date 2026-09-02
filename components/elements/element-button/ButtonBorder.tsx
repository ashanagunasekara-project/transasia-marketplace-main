function ButtonBorder() {
  return (
    <>
      <div className="rbt-button-area rbt-section-gapBottom rbt-bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">
                  Button Border
                </span>
                <h2 className="title">Border Variation</h2>
              </div>
            </div>
          </div>
          <div className="row rbt-section-gap3Top">
            <div className="col-lg-12">
              <div className="rbt-button-group">
                <button className="rbt-btn rbt-btn-border rbt-square-btn">
                  Button CTA
                </button>
                <button className="rbt-btn rbt-btn-border">Button CTA</button>
                <button className="rbt-btn rbt-btn-border color-two">
                  Button CTA
                </button>
                <button className="rbt-btn rbt-btn-border radius-round-6">
                  Button CTA
                </button>
                <button className="rbt-btn rbt-btn-border radius-round-10">
                  Button CTA
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ButtonBorder;
