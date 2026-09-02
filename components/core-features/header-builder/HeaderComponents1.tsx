import Image from "next/image";
function HeaderComponents1() {
  return (
    <>
      <div className="pt_sm--24 pb_sm--24 pt_md--24 pb_md--24 rbt-bg-color-brand-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rbt-ele-builder-card rbt-builder-card-var-2 card-content-side shadow-none bg-transparent align-items-center">
                <div className="rbt-card-content">
                  <div className="content-inner">
                    <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded mb--12">
                      Exclusive
                    </div>
                    <h2 className="rbt-title rbt-text-bold">
                      Import any premade header template to your website in
                      1-click
                    </h2>
                    <p className="rbt-description">
                      Experience world-class design and a super user-friendly
                      interface for effortless website design and seamless
                      editing.
                    </p>
                  </div>
                </div>
                <div className="ele-layout-display">
                  <figure className="ele-image">
                    <Image
                      alt="Element Image"
                      src="/assets/images/splash/builder-element/builder-card-1.webp"
                      width={983}
                      height={717}
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderComponents1;
