import Image from "next/image";
function HeaderComponents2() {
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
                      src="/assets/images/splash/builder-element/header-img1.webp"
                      width={872}
                      height={666}
                    />
                  </figure>
                </div>
                <div className="rbt-card-content pt_sm--24">
                  <div className="content-inner">
                    <h2 className="rbt-title rbt-text-bold">
                      Use the built-in banner tool to create announcements.
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

export default HeaderComponents2;
