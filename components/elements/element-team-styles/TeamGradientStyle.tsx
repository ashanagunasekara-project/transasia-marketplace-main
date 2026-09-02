import Link from "next/link";
import Image from "next/image";
import { teamMembersGradient } from "@/data/team";
function TeamGradientStyle() {
  return (
    <>
      <div className="rbt-team-area bg-gradient-8 rbt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-between flex-row align-items-center flex-wrap rbt-gap--16 pb--8">
              <div className="rbt-component-section-title mb--0 rbt-gap--4 p-0 border-0">
                <a
                  href="#"
                  className="rbt-card-subtitle rbt-card-catagories-text mt--0 rbt-scroll-trigger fade_in animation-order-1"
                >
                  Our Shopkeeper
                </a>
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                  <span className="rbt-bold--text">Expert Shopkeeper</span>
                </h2>
              </div>
              <Link
                className="rbt-btn rbt-btn-secondary rbt-btn-sm-2 rbt-scroll-trigger fade_in animation-order-3"
                href={`/contact`}
              >
                <span className="btn-text">BECAME A SHOPKEEPER</span>
                <span className="btn-icon ml--4">
                  <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
                </span>
              </Link>
            </div>
          </div>
          <div className="row row--16 mt_dec--32">
            {teamMembersGradient.map((member) => (
              <div key={member.id} className="col-lg-4 col-md-6 col-12 mt--32">
                <div className="rbt-team team-style-default style-two rbt-hover">
                  <div className="inner">
                    <div className="thumbnail">
                      <Image
                        alt="Corporate Template"
                        src={member.image}
                        width={415}
                        height={555}
                      />
                    </div>
                    <div className="content">
                      <h2 className="title">{member.name}</h2>
                      <h6 className="subtitle theme-gradient">
                        {member.subtitle}
                      </h6>
                      <span className="team-form">
                        <i className="fa-regular fa-location-dot" />
                        <span className="location">{member.location}</span>
                      </span>
                      <p className="description">{member.description}</p>
                      <ul className="social-icon rbt-social-default icon-naked mt--20">
                        {member.socialLinks.map((link) => (
                          <li key={link.iconClassName}>
                            <a href={link.href}>
                              <i className={link.iconClassName} />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamGradientStyle;
