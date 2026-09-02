import Image from "next/image";
export default function Banner() {
  return (
    <div className="rbt-component-area rbt-lookbook-area rbt-section-gapBottom">
      <div className="container">
        {/* Start Look Book Area */}
        <div className="row row--0">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 p-0">
            <div className="rbt-lookbook-section lookbook-list-banner-style lookbook-list-banner-style-one">
              <div className="lookbook-left-portion">
                <div className="rbt-lookbook-banner">
                  <Image
                    className="rbt-scroll-trigger zoom_in animation-order-1"
                    alt="Lookbook Image"
                    src="/assets/images/lookbook-images/lookbook-banner-wedding-sm-01.webp"
                    width={1694}
                    height={833}
                  />
                </div>
              </div>
              <div className="lookbook-right-portion">
                <div className="content-part text-center">
                  <h3 className="title">Real Brides</h3>
                  <p>
                    We are inspired by our KAREN WILLIS HOLMES Real Brides. We
                    love seeing women in our gowns, showcasing their style. It&apos;s
                    a privilege to be their wedding dress designer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Look Book Area */}
      </div>
    </div>
  );
}
