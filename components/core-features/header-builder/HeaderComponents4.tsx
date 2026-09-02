import Image from "next/image";
function HeaderComponents4() {
  return (
    <>
      <div className="rbt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rbt-ele-builder-card rbt-builder-card-var-2 card-content-side shadow-none bg-transparent">
                <div className="ele-layout-display">
                  <figure className="ele-image">
                    <Image
                      alt="Element Image"
                      src="/assets/images/splash/builder-element/builder-card-3.webp"
                      width={872}
                      height={672}
                    />
                  </figure>
                </div>
                <div className="rbt-card-content">
                  <div className="content-inner">
                    <div className="rbt-product-badge rbt-product-badge-bg-danger border-rounded mb--12">
                      built-in
                    </div>
                    <h2 className="rbt-title rbt-text-bold">
                      Create great looking announcements with the included
                      banner feature.
                    </h2>
                    <p className="rbt-description">
                      Experience world-class design and a super user-friendly
                      interface for effortless website design and seamless
                      editing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderComponents4;
