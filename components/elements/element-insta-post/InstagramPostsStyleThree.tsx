import Image from "next/image";
import { instaPosts } from "@/data/instagramPosts";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";

function InstagramPostsStyleThree() {
  return (
    <>
      <div className="rbt-component-area rbt-instapost-area rbt-section-gap rbt-bg-color-gray-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title">
                  Instagram Posts Style{" "}
                  <span className="rbt-bold--text">Three</span>
                </h2>
              </div>
            </div>
          </div>
          {/* Start Instagram Posts Area */}
          <div className="row rounded--16 overflow-hidden">
            <div className="col-lg-5 col-md-5 col-sm-12 col-12 p-0">
              <ModalTriggerButton
                as="div"
                openModalName="instaModal"
                className="rbt-instapost text-center rbt-instapost-style-one rbt-instapost-boxed-round-style"
              >
                <div className="instapost-img">
                  <Image
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
                          openModalName="instaModal"
                          className="instapost-img"
                          as="div"
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
          {/* End Instagram Posts Area */}
        </div>
      </div>
    </>
  );
}

export default InstagramPostsStyleThree;
