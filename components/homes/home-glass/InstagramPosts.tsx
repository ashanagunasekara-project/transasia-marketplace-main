import Image from "next/image";
import { instaPosts } from "@/data/instagramPosts";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";
export default function InstagramPosts() {
  return (
    <div className="rbt-component-area rbt-instapost-area rbt-bg-color-white rbt-section-gap2Bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-center flex-wrap rbt-gap--16 mb--32">
            <div className="rbt-component-section-title rbt-gap--4 p-0 mb--0 border-0">
              <span className="rbt-card-subtitle b1 rbt-text-color-heading mt--0 rbt-scroll-trigger fade_in animation-order-1">
                Follow US Now
              </span>
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                <span className="rbt-bold--text">Follow Us </span>@Instagram
              </h2>
            </div>
          </div>
        </div>
        {/* Start Instagram Posts Area */}
        <div className="row g-0 rounded--16 overflow-hidden">
          <div className="col-lg-5 col-md-5 col-sm-12 col-12 p-0">
            <ModalTriggerButton
              as="div"
              openModalName="instaModal"
              className="rbt-instapost h-100 text-center rbt-instapost-style-one rbt-instapost-boxed-round-style"
            >
              <div className="instapost-img h-100">
                <Image
                  className="h-100"
                  alt="Ecommerce Brand Images"
                  src="/assets/images/insta-posts/insta-post-c-01.webp"
                  width={1088}
                  height={1088}
                />
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
            </ModalTriggerButton>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12 col-12 p-0">
            <div className="row m-0">
              {instaPosts.map((post, index) => (
                <div
                  key={index}
                  className="col-lg-4 col-md-4 col-sm-4 col-4 p-0"
                >
                  <div className="rbt-instapost text-center rbt-instapost-style-one rbt-instapost-boxed-round-style insta-post-min-height">
                    <div className="inner">
                      <ModalTriggerButton
                        as="div"
                        openModalName="instaModal"
                        className="instapost-img"
                      >
                        <Image
                          alt="Ecommerce Brand Images"
                          src={post.imgSrc || ""}
                          width={518}
                          height={544}
                        />
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
                      </ModalTriggerButton>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* End Instagram Posts Area */}
    </div>
  );
}
