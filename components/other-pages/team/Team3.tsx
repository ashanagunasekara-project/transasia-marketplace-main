"use client";
import Image from "next/image";
import { teamMembers } from "@/data/team";
import { useUiElement } from "@/context/uiStore";
import ModalTriggerButton from "../../action-buttons/ModalTriggerButton";
import { ModalName } from "@/types/modal";

export default function Team3() {
  const { setActiveMember } = useUiElement();

  return (
    <div className="rbt-team-area rbt-bg-color-white rbt-section-gap">
      <div className="container">
        <div className="row g-5">
          {/* Start Single Team  */}
          {teamMembers.slice(0, 4).map((member, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="rbt-team-modal-thumb nav nav-tabs">
                <ModalTriggerButton
                  as="div"
                  className="rbt-team-thumbnail border-0 bg-transparent p-0"
                  onClick={() => setActiveMember(member)}
                  openModalName={ModalName.exampleModal}
                >
                  <div className="thumb">
                    {member.image && (
                      <Image
                        src={member.image}
                        width={415}
                        height={555}
                        alt="Testimonial Images"
                      />
                    )}
                  </div>
                </ModalTriggerButton>
              </div>
            </div>
          ))}
          {/* End Single Team  */}

          {/* Start Single Team  */}
          {teamMembers.slice(4, 10).map((member, index) => (
            <div key={index} className="col-lg-2 col-md-3 col-sm-4 col-12">
              <div className="rbt-team-modal-thumb nav nav-tabs">
                <ModalTriggerButton
                  as="div"
                  className="rbt-team-thumbnail border-0 bg-transparent p-0"
                  onClick={() => setActiveMember(member)}
                  openModalName={ModalName.exampleModal}
                >
                  <div className="thumb">
                    {member.image && (
                      <Image
                        alt="Testimonial Images"
                        src={member.image}
                        width={415}
                        height={555}
                      />
                    )}
                  </div>
                </ModalTriggerButton>
              </div>
            </div>
          ))}
          {/* End Single Team  */}
        </div>
      </div>
    </div>
  );
}
