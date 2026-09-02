import Image from "next/image";
import { instaPostMiniCards } from "@/data/instagramPosts";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";
export default function InstagramPosts() {
  return (
    <div className="rbt-component-area rbt-instapost-area rbt-bg-color-white rbt-section-gap2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-center flex-wrap rbt-gap--16 mb--40">
            <div className="rbt-component-section-title rbt-gap--4 p-0 mb--0 border-0">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                <span className="rbt-bold--text">Follow Us @ Instagram</span>
              </h2>
            </div>
          </div>
        </div>
        {/* Start Instagram Posts Area */}
        <div className="row row--12 mt_dec--24">
          {instaPostMiniCards.map((post, index) => (
            <div
              key={index}
              className="col-lg-2 col-md-4 col-sm-4 col-4 mt--24"
            >
              <div className="rbt-instapost text-center rbt-instapost-style-one">
                <div className="inner">
                  <ModalTriggerButton
                    openModalName="instaModal"
                    className="instapost-img"
                  >
                    <Image
                      className={`rbt-scroll-trigger zoom_in animation-order-${index + 1}`}
                      alt="Ecommerce Instagram Posts Image"
                      src={post.imgSrc || ""}
                      width={400}
                      height={400}
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
  );
}
