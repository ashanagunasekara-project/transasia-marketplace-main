import Image from "next/image";
import { dInstaPosts } from "@/data/instagramPosts";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";
export default function InstagramPosts() {
  return (
    <div className="rbt-component-area rbt-instapost-area rbt-bg-color-white rbt-section-gap2">
      <div className="wrapper plr--40 plr_lg--20 plr_md--20 plr_sm--20">
        {/* Start Instagram Posts Area */}
        <div className="row row--12">
          <div className="col-lg-12">
            <div className="rbt-instapost-grp style--one rbt-mobile-row">
              {dInstaPosts.slice(0, 3).map((post, index) => (
                <div
                  key={index}
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
              ))}

              {/* Social Block */}
              <div className="rbt-instapost-social-area text-center rbt-scroll-trigger fade_in animation-order-1">
                <h3 className="title">
                  Follow Us On <span>@instagram</span>
                </h3>
                <p className="desc">Find out what is happening with us</p>
                <ul className="social-icon rbt-social-default with-bg-primary">
                  <li>
                    <a href="https://www.tiktok.com/">
                      <i className="fa-brands fa-tiktok" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com">
                      <i className="fa-brands fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>

              {dInstaPosts.slice(3).map((post, index) => (
                <div
                  key={index + 3}
                  className={`rbt-instapost text-center rbt-instapost-style-one rbt-scroll-trigger fade_in animation-order-${index + 4}`}
                >
                  <div className="inner">
                    <ModalTriggerButton
                      openModalName="instaModal"
                      className="instapost-img"
                    >
                      <Image
                        className={`rbt-scroll-trigger zoom_in animation-order-${index + 4}`}
                        alt="Ecommerce Brand Images"
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
              ))}
            </div>
          </div>
        </div>
        {/* End Instagram Posts Area */}
      </div>
    </div>
  );
}
