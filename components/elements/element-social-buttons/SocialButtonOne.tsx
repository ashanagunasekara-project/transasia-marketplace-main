function SocialButtonOne() {
  return (
    <>
      <div className="rbt-component-area rbt-section-gapTop rbt-bg-color-gray-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h4 className="rbt-title">
                  Social Button <span className="rbt-bold--text">One</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              {/* Start social share */}
              <ul className="rbt-blog-social-share">
                <li>
                  <a
                    href="https://www.facebook.com"
                    className="facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.pinterest.com"
                    className="pinterest"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-pinterest-p" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com"
                    className="linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.whatsapp.com"
                    className="whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-whatsapp" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.discord.com"
                    className="discord"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-discord" />
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

export default SocialButtonOne;
