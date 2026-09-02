'use client';

import Image from "next/image";
import { useParallax } from "@/hooks/useParallax";

export default function Faqs() {
  const parallaxRef = useParallax();
  const accordionData = [
    {
      id: "collapseTwo1",
      headerId: "headingTwo1",
      title: "What is Unimart ? How does it work?",
      content:
        "You can run Unimart easily. Any School, E-commerce Website, College can be use this Unimart e-Commerce template for their e-commerce purpose. A Ecommerce can be run their online leaning management system by Unimart E-commerce template.",
      isOpen: true,
    },
    {
      id: "collapseTwo2",
      headerId: "headingTwo2",
      title: "How can I get the customer support?",
      content: (
        <>
          After purchasing the product need you any support you can be share
          with us with sending mail to{" "}
          <a href="mailto:rainbowit10@gmail.com">rainbowit10@gmail.com</a>.
        </>
      ),
    },
    {
      id: "collapseTwo3",
      headerId: "headingTwo3",
      title: "Can I get update regularly and For how long do I get updates?",
      content:
        "Yes, We will get update the Unimart. And you can get it any time. Next time we will comes with more feature. You can be get update for unlimited times. Our dedicated team works for update.",
    },
    {
      id: "collapseTwo4",
      headerId: "headingTwo4",
      title: "15 Things To Know About E-commerce?",
      content:
        "If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph.",
    },
  ];

  return (
    <div ref={parallaxRef} className="rbt-accordion-area accordion-style-1 rbt-bg-color-white rbt-section-gap">
      <div className="container">
        <div className="row gx-5 gy-0 align-items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="rbt-accordion-style accordion mt_sm--32">
              <div className="section-title text-start">
                <span className="subtitle bg-pink-opacity">FAQ</span>
                <h2 className="title">
                  Have a Question with <br />
                  Unimart E-commerce Website?
                </h2>
                <p className="description has-medium-font-size mt--20 mb--40 mx-auto">
                  <strong>Unimart</strong> is a modern and user-friendly
                  e-commerce platform designed to make online shopping simple,
                  secure, and convenient.
                </p>
              </div>
              <div className="rbt-accordion-style rbt-accordion-02 accordion">
                <div className="accordion" id="accordionExampleb2">
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
                        data-bs-parent="#accordionExampleb2"
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
                className="image-1 rbt-rounded--8 image-auto"
                data-parallax='{"x": 0, "y": 30}'
                alt="E-commerce Images"
                src="/assets/images/about/about-01.webp"
                width={992}
                height={1200}
              />
              <Image
                className="image-2 rbt-rounded--8 image-auto"
                data-parallax='{"x": 0, "y": 80}'
                alt="E-commerce Images"
                src="/assets/images/about/about-10.webp"
                width={816}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
