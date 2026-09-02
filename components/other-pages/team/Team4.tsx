import Image from "next/image";
import { teamMembers } from "@/data/team";

export default function Team4() {
  return (
    <div className="rbt-team-area rbt-bg-color-white rbt-section-gap">
      <div className="container">
        <div className="row row--0">
          <div className="col-lg-12">
            <div className="rbt-component-section-title text-center">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                <span className="rbt-bold--text">Meet Our Team</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row row--16 mt_dec--32">
          {/* Start Single Team  */}
          {teamMembers.slice(0,12).map((member, index) => (
            <div
              key={index}
              className="col-xl-3 col-lg-4 col-md-6 col-12 mt--32"
            >
              <div className="rbt-team team-style-default style-three rbt-hover">
                <div className="inner">
                  <div className="thumbnail">
                    {member.image && (
                      <Image
                        alt="Corporate Template"
                        src={member.image}
                        width={415}
                        height={555}
                      />
                    )}
                  </div>
                  <div className="content">
                    <h6 className="title">{member.name}</h6>
                    <p className="b3 mb--0 subtitle">
                      <i className="fa-regular fa-briefcase" />
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* End Single Team  */}
        </div>
      </div>
    </div>
  );
}
