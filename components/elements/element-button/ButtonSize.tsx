function ButtonSize() {
  return (
    <>
      <div className="rbt-button-area rbt-section-gapBottom rbt-bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">Button Size</span>
                <h2 className="title">Size Variation</h2>
              </div>
            </div>
          </div>
          <div className="row rbt-section-gap3Top">
            <div className="col-lg-12">
              <div className="rbt-button-group">
                <button className="rbt-btn rbt-btn-xs">Button xs</button>
                <button className="rbt-btn rbt-btn-sm-2">Button sm-2</button>
                <button className="rbt-btn rbt-btn-sm">Button sm</button>
                <button className="rbt-btn rbt-btn-md">Button md</button>
                <button className="rbt-btn">Button lg</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ButtonSize;
