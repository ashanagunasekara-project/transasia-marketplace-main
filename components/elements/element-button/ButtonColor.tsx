function ButtonColor() {
  return (
    <>
      <div className="rbt-button-area rbt-section-gap rbt-bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">
                  Button Color
                </span>
                <h2 className="title">Color Variation</h2>
              </div>
            </div>
          </div>
          <div className="row rbt-section-gap3Top">
            <div className="col-lg-12">
              <div className="rbt-button-group">
                <button className="rbt-btn">Button CTA</button>
                <button className="rbt-btn rbt-btn-secondary">
                  Button CTA
                </button>
                <button className="rbt-btn rbt-btn-black">Button CTA</button>
                <button className="rbt-btn rbt-btn-white">Button CTA</button>
                <button className="rbt-btn rbt-btn-gray">Button CTA</button>
                <button className="rbt-btn rbt-btn-gray-light">
                  Button CTA
                </button>
                <button className="rbt-btn rbt-btn-naked">Button CTA</button>
                <button className="rbt-btn disabled">Button CTA</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ButtonColor;
