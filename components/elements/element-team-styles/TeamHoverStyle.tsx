import Image from "next/image";
import { teamMembers } from "@/data/team";
function TeamHoverStyle() {
  return (
    <>
      <div className="rbt-team-area rbt-bg-color-gray-light rbt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">Team Hover Style.</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row row--16 mt_dec--32">
            {teamMembers.slice(0, 8).map((member) => (
              <div
                key={member.id}
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt--32"
              >
                <div className="team">
                  <div className="thumbnail">
                    {member.image && (
                      <Image
                        alt="Blog Images"
                        src={member.image}
                        width={415}
                        height={555}
                      />
                    )}
                  </div>
                  <div className="content">
                    <h6 className="title">{member.name}</h6>
                    <p className="designation">
                      <i className="fa-regular fa-briefcase" />
                      {member.role}
                    </p>
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

export default TeamHoverStyle;
