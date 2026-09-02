import Link from "next/link";

export default function HelpFaqs() {
  const accordionData = [
    {
      id: "collapseTwo1",
      headerId: "headingTwo1",
      title: "What is Unimart? How does it work?",
      content:
        "Unimart is a modern and versatile eCommerce template designed for online stores, businesses, and product-based websites. It includes all the necessary features to manage products, showcase items, handle orders, and run a complete online store efficiently.",
      isOpen: true,
    },
    {
      id: "collapseTwo2",
      headerId: "headingTwo2",
      title: "How can I get customer support?",
      content: (
        <>
          After purchasing the Unimart template, if you need any support, feel
          free to reach out to us via email at{" "}
          <a href="mailto:rainbowit10@gmail.com">rainbowit10@gmail.com</a>.
          We’re here to help!
        </>
      ),
    },
    {
      id: "collapseTwo3",
      headerId: "headingTwo3",
      title: "Will I get regular updates? For how long?",
      content:
        "Yes, Unimart receives regular updates with new features, performance improvements, and bug fixes. Once you purchase the template, you’ll get lifetime free updates, ensuring your website remains up-to-date with the latest trends.",
    },
    {
      id: "collapseTwo4",
      headerId: "headingTwo4",
      title: "15 Things to Know About E-commerce",
      content:
        "E-commerce is evolving rapidly. From choosing the right platform to optimizing for SEO and mobile, understanding trends like AI integration, user experience, and secure payments is essential to running a successful online business. Unimart is built with these essentials in mind.",
    },
  ];

  return (
    <div className="rbt-component-area rbt-section-gap">
      <div className="container">
        <div className="row row--12">
          <div className="col-12">
            <div className="rbt-component-section-title text-center border-0 p-0 mb--40 align-items-left">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                <span className="rbt-bold--text">Find Your</span> Answer Fast
              </h2>
              <p className="description mx-auto rbt-scroll-trigger fade_in animation-order-2">
                Still need help? Click the button below to contact our support
                team.
              </p>
              <div className="d-flex justify-content-center">
                <Link href={`/contact`} className="rbt-btn rbt-btn-md">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8 col-xl-6 mx-auto">
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
      </div>
    </div>
  );
}
