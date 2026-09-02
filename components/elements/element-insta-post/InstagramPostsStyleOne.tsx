import Image from "next/image";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";

const instaPostImages = [
  "/assets/images/insta-posts/insta-post-a-01.webp",
  "/assets/images/insta-posts/insta-post-a-02.webp",
  "/assets/images/insta-posts/insta-post-a-03.webp",
  "/assets/images/insta-posts/insta-post-a-04.webp",
  "/assets/images/insta-posts/insta-post-a-05.webp",
  "/assets/images/insta-posts/insta-post-a-06.webp",
];

function InstagramPostsStyleOne() {
  return (
    <>
      <div className="rbt-component-area rbt-instapost-area rbt-section-gap rbt-bg-color-gray-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title">
                  Instagram Posts Style{" "}
                  <span className="rbt-bold--text">One</span>
                </h2>
              </div>
            </div>
          </div>
          {/* Start Instagram Posts Area */}
          <div className="row row--12 mt_dec--24">
            {instaPostImages.map((src, index) => (
              <div
                className="col-lg-2 col-md-4 col-sm-4 col-4 mt--24"
                key={src}
              >
                <div className="rbt-instapost text-center rbt-instapost-style-one">
                  <div className="inner">
                    <ModalTriggerButton
                      as="div"
                      openModalName="instaModal"
                      className="instapost-img"
                    >
                      <Image
                        className={`rbt-scroll-trigger zoom_in animation-order-${index + 1}`}
                        alt="Ecommerce Instagram Posts Image"
                        src={src}
                        width={240}
                        height={240}
                      />
                    </ModalTriggerButton>
                    <div className="instapost-content">
                      <span className="insta-icon">
                        <i className="fa-brands fa-instagram" />
                      </span>
                      <ModalTriggerButton
                        openModalName="instaModal"
                        className="rbt-btn-link"
                      >
                        View Product
                      </ModalTriggerButton>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* End Instagram Posts Area */}
        </div>
      </div>
    </>
  );
}

export default InstagramPostsStyleOne;
