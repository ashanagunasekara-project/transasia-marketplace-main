import Image from "next/image";
import { kidsInstaPosts } from "@/data/instagramPosts";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";
export default function InstagramPosts() {
  return (
    <div className="rbt-component-area rbt-section-gap">
      <div className="container">
        <div className="row row--12 mt_dec--24">
          {kidsInstaPosts.map((post, index) => (
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
                      width={480}
                      height={480}
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
