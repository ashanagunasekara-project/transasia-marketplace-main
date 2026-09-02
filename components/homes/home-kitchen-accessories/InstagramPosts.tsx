import Image from "next/image";
import { kitchenInstaPosts } from "@/data/instagramPosts";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";
export default function InstagramPosts() {
  return (
    <div className="rbt-component-area rbt-products-area">
      <div className="rbt-full-width-wrapper">
        <div className="rbt-gray-contain-box rbt-gray-contain-box-style-one rbt-bg-color-gray-light pt--80 pb--80">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rbt-component-section-title rbt-gap--4 text-center border-0 p-0 align-items-center">
                  <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                    <span className="rbt-bold--text">Meet The </span>Product
                    Users
                  </h2>
                </div>
              </div>
            </div>
            {/* Start Instagram Posts Area */}
            <div className="row row--12 mt_dec--16 justify-content-center">
              {kitchenInstaPosts.map((post, index) => (
                <div
                  key={index}
                  className="col-lg-2 col-md-4 col-sm-4 col-4 mt--16 d-flex justify-content-center"
                >
                  <div
                    className={`rbt-instapost text-center rbt-instapost-style-one rbt-scroll-trigger fade_in animation-order-${index + 1}`}
                  >
                    <div className="inner">
                      <ModalTriggerButton
                        openModalName="instaModal"
                        className="instapost-img"
                      >
                        <Image
                          className={`rbt-scroll-trigger zoom_in animation-order-${index + 1}`}
                          alt="Ecommerce Brand Images"
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
      </div>
    </div>
  );
}
