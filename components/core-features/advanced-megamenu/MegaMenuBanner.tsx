import Image from "next/image";

function MegaMenuBanner() {
  return (
    <>
      <div className="rbt-builder-banner rbt-builder-banner-var-2 rbt-splash-banner-bg-var-1 rbt-splash-banner-area @@variation-class">
        <div className="rbt-splash-builder-banner-wider">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <div className="rbt-splash-section-title text-center">
                  <span className="subtitle">Advanced Megamenu Options</span>
                  <h1 className="rbt-title mb--24 rbt-text-capitalize">
                    <span className="rbt-bold--text">
                      Advanced Mega Menus
                      <br />
                    </span>
                    <span className="rbt-title-sm-text">
                      With All Possible Optionality
                    </span>
                  </h1>
                  <p className="rbt-description">
                    Unimart Megamenu is a powerful tool for creating a better
                    user experience and increasing your sales. It is a highly
                    customizable and easy-to-use tool that allows you to create
                    a beautiful and functional menu for your website.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="rbt-banner-part-right">
                  <div className="rbt-content">
                    <figure>
                      <Image
                        alt="Component Image"
                        src="/assets/images/splash/builder-element/megamenu/megamenu-banner-img.webp"
                        width={1246}
                        height={881}
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" className="rbt-splash-btn-circle rbt-scroll-down-btn">
              <Image
                className="rbt-animate-rotation-forward"
                alt="Text Image"
                src="/assets/images/splash/others/circle-btn-text.png"
                width={109}
                height={109}
              />
              <span className="circle-btn-center-icon">
                <Image
                  alt="Icon"
                  src="/assets/images/splash/icons/icon21.png"
                  width={48}
                  height={49}
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MegaMenuBanner;
