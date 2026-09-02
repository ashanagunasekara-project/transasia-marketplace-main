'use client';

import { useParallax } from "@/hooks/useParallax";
import Image from "next/image";

function AccordionBlock04() {
  const paralaxRef = useParallax();
  
  const accordionData = [
    {
      id: "collapseFour1",
      headerId: "headingFour1",
      title: "What is Unimart ? How does it work?",
      content:
        "You can run Unimart easily. Any School, E-commerce Website, College can be use this Unimart e-Commerce template for their e-commerce purpose.",
      isOpen: true,
    },
    {
      id: "collapseFour2",
      headerId: "headingFour2",
      title: "How can I get the customer support?",
      content:
        "After purchasing the product need you any support you can be share with us with sending mail to rainbowit10@gmail.com.",
    },
    {
      id: "collapseFour3",
      headerId: "headingFour3",
      title: "Can I get update regularly?",
      content:
        "Yes, We will get update the Unimart. And you can get it any time. Next time we will comes with more feature. You can be get update for unlimited times. Our dedicated team works for update.",
    },
    {
      id: "collapseFour4",
      headerId: "headingFour4",
      title: "How can I run Unimart html template?",
      content:
        "You can run Unimart easily. First You'll need to have node and npm on your machine. So Please open your command prompt then check your node.",
    },
  ];

  return (
    <>
      {/* Start Accordion Area  */}
      <div
      ref={paralaxRef}
        id="rbt-accordion-block-04"
        className="rbt-accordion-area accordion-style-1 rbt-bg-color-gray-light rbt-section-gap"
      >
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 order-2 order-lg-1 mt_md--40 mt_sm--40">
              <div className="rbt-accordion-style accordion">
                <div className="section-title text-start">
                  <span className="subtitle bg-pink-opacity">FAQ</span>
                  <h2 className="title">
                    Have a Question with <br />
                    Unimart E-commerce Website?
                  </h2>
                  <p className="description has-medium-font-size mt--20 mb--40">
                    <strong>It&apos;s an e-commerce platform.</strong> Unimart helps
                    you launch modern online stores quickly with reusable sections,
                    responsive layouts, and prebuilt shop flows for categories,
                    product details, cart, and checkout.
                  </p>
                </div>
                <div className="rbt-accordion-style rbt-accordion-05 accordion">
                  <div className="accordion" id="accordionExampleb4">
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
                          data-bs-parent="#accordionExampleb4"
                        >
                          <div className="accordion-body card-body">{item.content}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="thumbnail rbt-image-gallery-1 mb--80 text-end">
                <Image
                  className="image-1 rbt-rounded--8"
                  data-parallax='{"x": 0, "y": 30}'
                  alt="E-commerce Images"
                  src="/assets/images/about/about-03.webp"
                  width={786}
                  height={1052}
                />
                <Image
                  className="image-2 rbt-rounded--8"
                  data-parallax='{"x": 0, "y": 80}'
                  alt="E-commerce Images"
                  src="/assets/images/about/about-11.webp"
                  width={408}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Accordion Area  */}
    </>
  );
}

export default AccordionBlock04;
