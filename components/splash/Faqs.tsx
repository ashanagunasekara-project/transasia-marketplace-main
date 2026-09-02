import Image from "next/image";

import { faqItems } from "@/data/splash";

const faqAvatars = [
  { src: "/assets/images/splash/others/author-img-1.png", animOrder: 1 },
  { src: "/assets/images/splash/others/author-img-2.png", animOrder: 1 },
  { src: "/assets/images/splash/others/author-img-3.png", animOrder: 3 },
  { src: "/assets/images/splash/others/author-img-4.png", animOrder: 4 },
];

export default function Faqs() {
  return (
    <div className="splash-section-gap rbt-splash-faq-area position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 offset-lg-2 col-sm-12">
            <div className="rbt-splash-section-title text-center mb--48">
              <ul className="rbt-tooltip mx-auto mb--24">
                {faqAvatars.map((avatar, idx) => (
                  <li
                    key={idx}
                    className={`rbt-scroll-trigger slide_in animation-order-${avatar.animOrder}`}
                  >
                    <a href="#" className="rbt-tooltip-img">
                      <Image
                        alt="Image"
                        src={avatar.src}
                        width={62}
                        height={62}
                      />
                    </a>
                  </li>
                ))}
              </ul>
              <span className="subtitle rbt-scroll-trigger fade_in animation-order-5">
                Get Answer To Your Question
              </span>
              <h2 className="rbt-title mb--24">
                <span className="rbt-bold--text rbt-scroll-trigger fade_in animation-order-6">
                  Do You Have Any Question
                  <br />
                </span>
                <span className="rbt-title-sm-text rbt-scroll-trigger fade_in animation-order-7">
                  To Ask Frequently?
                </span>
              </h2>
            </div>
            <div className="rbt-accordion-style">
              <div className="accordion" id="accordionExamplea1">
                {faqItems.map((faq, index) => (
                  <div
                    key={faq.id}
                    className={`accordion-item rbt-scroll-trigger slide_in animation-order-${index + 1}`}
                  >
                    <h4 className="accordion-header" id={faq.headingId}>
                      <button
                        className={`accordion-button${faq.defaultOpen ? "" : " collapsed"}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${faq.id}`}
                        aria-expanded={faq.defaultOpen ? "true" : "false"}
                        aria-controls={faq.id}
                      >
                        {faq.question}
                        <span className="icon">
                          <i className="fa-regular fa-arrow-down" />
                        </span>
                      </button>
                    </h4>
                    <div
                      id={faq.id}
                      className={`accordion-collapse collapse${faq.defaultOpen ? " show" : ""}`}
                      aria-labelledby={faq.headingId}
                      data-bs-parent="#accordionExamplea1"
                    >
                      <div className="accordion-body">
                        {faq.answer.map((part, partIndex) => {
                          const key = `${faq.id}-${partIndex}`;

                          if (part.type === "text") {
                            return <span key={key}>{part.value}</span>;
                          }

                          if (part.type === "link") {
                            return (
                              <a
                                key={key}
                                href={part.href}
                                target={part.external ? "_blank" : undefined}
                                rel={
                                  part.external ? "noopener noreferrer" : undefined
                                }
                              >
                                {part.label}
                              </a>
                            );
                          }

                          return <code key={key}>{part.value}</code>;
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
