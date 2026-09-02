

function MiniListStyle() {
  return (
    <>
      
              <div className="rbt-liststyle-area rbt-bg-color-white rbt-section-gap">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="rbt-component-section-title d-flex justify-content-between align-items-center p-0 mb--24 border-0">
                        <h4 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                          <span className="rbt-bold--text">Standard List Style</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    {/* Start List Style  */}
                    <div className="col-lg-12 col-md-12 col-12 d-flex justify-content-center">
                      <ul>
                        <li>Name (required)</li>
                        <li>Age (required)</li>
                        <li>Date of birth (required)</li>
                        <li>Passport/ ID no (required)</li>
                        <li>Current career (required)</li>
                        <li>Mobile phone numbers (required)</li>
                      </ul>
                    </div>
                    {/* End List Style  */}
                  </div>
                </div>
              </div>
    </>
  );
}

export default MiniListStyle;
