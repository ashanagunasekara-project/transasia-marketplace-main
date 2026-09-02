'use client';

import { useParallax } from "@/hooks/useParallax";
import Image from "next/image";

function AccordionBlock01() {
  const paralaxRef = useParallax();
  const accordionData = [
    {
      id: "collapseOne1",
      headerId: "headingOne1",
      title: "What if I just had renovation work done?",
      content:
        "If you've recently had renovation work done, we can provide specialized cleaning services tailored to post-renovation needs. Our team is equipped to handle the extra dust and debris that comes with renovations, ensuring your space is spotless and ready for use.",
      isOpen: true,
    },
    {
      id: "collapseOne2",
      headerId: "headingOne2",
      title: "Do I get a discount if I’m a frequent customer?",
      content:
        "Yes, we offer discounts to our loyal customers. If you use our services frequently, you may qualify for special pricing or promotional offers. Please contact our customer service team for more details on available discounts.",
    },
    {
      id: "collapseOne3",
      headerId: "headingOne3",
      title:
        "Can I give specific instructions to the cleaners and ask for special requests?",
      content:
        "Absolutely! We understand that every space has unique needs. You can provide specific instructions and request special services to ensure your cleaning needs are met exactly as you prefer. Our team is committed to accommodating your requirements.",
    },
    {
      id: "collapseOne4",
      headerId: "headingOne4",
      title: "What if I don’t have a mop, bucket, or vacuum?",
      content:
        "No problem at all! Our cleaning team comes fully equipped with all the necessary supplies, including mops, buckets, and vacuums. You don’t need to provide any cleaning tools or equipment.",
    },
    {
      id: "collapseOne5",
      headerId: "headingOne5",
      title: "Do you clean offices and other commercial spaces?",
      content:
        "Yes, we offer cleaning services for both residential and commercial spaces, including offices. Our team is experienced in handling the specific cleaning needs of commercial environments, ensuring a clean and professional setting for your business.",
    },
  ];

  return (
    <>
      {/* Start Accordion Area  */}
      <div
        ref={paralaxRef}
        id="rbt-accordion-block-01"
        className="rbt-accordion-area accordion-style-1 rbt-bg-color-white rbt-section-gap"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">Accordion Style</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="rbt-thumbnail-wrapper">
                <div
                  className="rbt-thumbnail thumb-image-1 rbt-curved-style-box"
                  data-parallax='{"x": 0, "y": 40}'
                >
                  <Image
                    alt="About thumbnail image"
                    src="/assets/images/about/about-image-2.webp"
                    width={687}
                    height={882}
                  />
                </div>
                <div
                  className="rbt-thumbnail thumb-image-2 rbt-curved-style-box"
                  data-parallax='{"x": 0, "y": -30}'
                >
                  <Image
                    alt="About thumbnail image"
                    src="/assets/images/about/about-image-3.webp"
                    width={371}
                    height={489}
                  />
                </div>
                <div
                  className="rbt-thumbnail thumb-image-3 rbt-curved-style-box"
                  data-parallax='{"x": 0, "y": -40}'
                >
                  <Image
                    alt="About thumbnail image"
                    src="/assets/images/about/about-image-4.webp"
                    width={564}
                    height={428}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt_md--40 mt_sm--40">
              <div className="rbt-accordion-style rbt-accordion-01 accordion">
                <div className="accordion" id="accordionExamplea1">
                  {accordionData.map((item) => (
                    <div className="accordion-item card" key={item.id}>
                      <h2 className="accordion-header card-header" id={item.headerId}>
                        <button
                          className={`accordion-button${item.isOpen ? "" : " collapsed"}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${item.id}`}
                          aria-expanded={item.isOpen ? "true" : "false"}
                          aria-controls={item.id}
                        >
                          {item.title}
                        </button>
                      </h2>
                      <div
                        id={item.id}
                        className={`accordion-collapse collapse${item.isOpen ? " show" : ""}`}
                        aria-labelledby={item.headerId}
                        data-bs-parent="#accordionExamplea1"
                      >
                        <div className="accordion-body card-body">{item.content}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Accordion Area  */}
    </>
  );
}

export default AccordionBlock01;
