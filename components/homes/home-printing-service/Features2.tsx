import Image from "next/image";
import ModalTriggerButton from "../../action-buttons/ModalTriggerButton";

const featureItems = [
  {
    iconClass: "fa-light fa-truck-fast",
    title: "Free Shipping",
    description: "From all orders over $100",
  },
  {
    iconClass: "fa-light fa-headset",
    title: "Quality Support",
    description: "24/7 online feedback",
  },
  {
    iconClass: "fa-light fa-box",
    title: "Return & Refund",
    description: "Return money within 30 days",
  },
  {
    iconClass: "fa-light fa-ticket",
    title: "Gift Voucher",
    description: "20% off when you shop online",
  },
];

const instagramPostImages = [
  "/assets/images/insta-posts/insta-post-a-01.webp",
  "/assets/images/insta-posts/insta-post-a-02.webp",
  "/assets/images/insta-posts/insta-post-a-03.webp",
  "/assets/images/insta-posts/insta-post-a-04.webp",
  "/assets/images/insta-posts/insta-post-a-05.webp",
  "/assets/images/insta-posts/insta-post-a-06.webp",
];

export default function Features2({ justifyCenter: _justifyCenter = false }) {
  return (
    <div className="rbt-component-area rbt-quick-inf-area rbt-bg-color-white rbt-section-gap2">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="rbt-inf-box-wrapper rbt-inf-box-wrapper-style-one">
              <ul className="rbt-inf-box-wrapper-list justify-content-center rbt-gap--120">
                {featureItems.map((item, index) => (
                  <li key={item.title}>
                    <div
                      className={`rbt-inf-box rbt-scroll-trigger zoom_in animation-order-${index + 1}`}
                    >
                      <div className="rbt-inf-box-icon">
                        <i className={item.iconClass} />
                      </div>
                      <div className="rbt-inf-box-content">
                        <h6 className="rbt-inf-box-title">{item.title}</h6>
                        <p className="rbt-inf-box-desc">{item.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Start Instagram Posts Area */}
        <div className="row row--12 mt_dec--24 rbt-section-gap2Top">
          {instagramPostImages.map((imageSrc, index) => (
            <div
              className="col-lg-2 col-md-4 col-sm-4 col-4 mt--24"
              key={imageSrc}
            >
              <div className="rbt-instapost text-center rbt-instapost-style-one">
                <ModalTriggerButton
                  className="inner w-100 p-0"
                  openModalName="instaModal"
                  as="div"
                >
                  <a href="#!" className="instapost-img">
                    <Image
                      className={`rbt-scroll-trigger zoom_in animation-order-${index + 1}`}
                      alt="Ecommerce Instagram Posts Image"
                      src={imageSrc}
                      width={240}
                      height={240}
                    />
                  </a>
                  <div className="instapost-content">
                    <span className="insta-icon">
                      <i className="fa-brands fa-instagram" />
                    </span>
                    <a href="#!" className="rbt-btn-link">
                      View Product
                    </a>
                  </div>
                </ModalTriggerButton>
              </div>
            </div>
          ))}
        </div>
        {/* End Instagram Posts Area */}
      </div>
    </div>
  );
}
