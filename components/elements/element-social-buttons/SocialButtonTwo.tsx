function SocialButtonTwo() {
  return (
    <>
      <div className="rbt-component-area rbt-section-gapTop rbt-bg-color-gray-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h4 className="rbt-title">
                  Social Button <span className="rbt-bold--text">Two</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              {/* Start social share */}
              <ul className="rbt-social-icon-list mt-3 mt_md--0 mt_sm--0">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-youtube" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-whatsapp" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-telegram" />
                  </a>
                </li>
              </ul>
              {/* End social share */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SocialButtonTwo;
