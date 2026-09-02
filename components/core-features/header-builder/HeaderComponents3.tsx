import Image from "next/image";
function HeaderComponents3() {
  return (
    <>
      <div className="rbt-bg-color-brand-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rbt-ele-builder-card rbt-builder-card-var-2 card-content-side shadow-none bg-transparent">
                <div className="rbt-card-content pt_sm--44">
                  <div className="content-inner">
                    <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded mb--12">
                      Exclusive
                    </div>
                    <h2 className="rbt-title rbt-text-bold">
                      Mobile friendly bottommenu design for mobile friendly
                      users
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
                      src="/assets/images/splash/builder-element/builder-card-2.webp"
                      width={898}
                      height={974}
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

export default HeaderComponents3;
