import Image from "next/image";
import { teamMembersHoverBottom } from "@/data/team";
function TeamHoverBottomContent() {
  return (
    <>
      <div className="rbt-team-area rbt-bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">
                    Team Hover Bottom Content.
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row row--16 mt_dec--32">
            {teamMembersHoverBottom.map((member) => (
              <div
                key={member.id}
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt--32"
              >
                <div className="team">
                  <div className="thumbnail">
                    <Image
                      alt="Blog Images"
                      src={member.image}
                      width={415}
                      height={555}
                    />
                  </div>
                  <div className="content">
                    <h6 className="title">{member.name}</h6>
                    <p className="designation">
                      <i className="fa-regular fa-briefcase" />
                      {member.role}
                    </p>
                    <ul className="social-icon">
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamHoverBottomContent;
