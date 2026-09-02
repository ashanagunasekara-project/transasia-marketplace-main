import Image from "next/image";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";

const instaPostItems = [
  {
    src: "/assets/images/insta-posts/insta-post-b-01.webp",
    fadeOrder: 1,
    zoomOrder: 1,
  },
  {
    src: "/assets/images/insta-posts/insta-post-b-02.webp",
    fadeOrder: 2,
    zoomOrder: 2,
  },
  {
    src: "/assets/images/insta-posts/insta-post-b-03.webp",
    fadeOrder: 3,
    zoomOrder: 3,
  },
  {
    src: "/assets/images/insta-posts/insta-post-b-04.webp",
    fadeOrder: 4,
    zoomOrder: 4,
  },
  {
    src: "/assets/images/insta-posts/insta-post-b-05.webp",
    fadeOrder: 5,
    zoomOrder: 5,
  },
  {
    src: "/assets/images/insta-posts/insta-post-b-06.webp",
    fadeOrder: 1,
    zoomOrder: 6,
  },
];

function InstagramPostsStyleTwo() {
  return (
    <>
      <div className="rbt-component-area rbt-instapost-area rbt-section-gap rbt-bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title">
                  Instagram Posts Style{" "}
                  <span className="rbt-bold--text">Two</span>
                </h2>
              </div>
            </div>
          </div>
          {/* Start Instagram Posts Area */}
          <div className="row row--12 mt_dec--16 justify-content-center">
            {instaPostItems.map((item) => (
              <div
                className="col-lg-2 col-md-4 col-sm-4 col-4 mt--16 d-flex justify-content-center"
                key={item.src}
              >
                <div
                  className={`rbt-instapost text-center rbt-instapost-style-one rounded rbt-scroll-trigger fade_in animation-order-${item.fadeOrder}`}
                >
                  <div className="inner">
                    <ModalTriggerButton
                      as="div"
                      openModalName="instaModal"
                      className="instapost-img"
                    >
                      <Image
                        className={`rbt-scroll-trigger zoom_in animation-order-${item.zoomOrder}`}
                        alt="Ecommerce Brand Images"
                        src={item.src}
                        width={200}
                        height={200}
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

export default InstagramPostsStyleTwo;
