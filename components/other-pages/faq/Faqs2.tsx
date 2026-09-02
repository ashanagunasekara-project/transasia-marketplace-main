export default function Faqs2() {
  const accordionData = [
    {
      id: "collapseThree1",
      headerId: "headingThree1",
      title: "What is Unimart ? How does it work?",
      content:
        "You can run Unimart easily. Any School, E-commerce Website, College can be use this Unimart Ecommerce template for their e-commerce purpose. A Ecommerce can be run their online leaning management system by Unimart Ecommerce template.",
      isOpen: true,
    },
    {
      id: "collapseThree2",
      headerId: "headingThree2",
      title: "How can I get the customer support?",
      content:
        "After purchasing the product need you any support you can be share with us with sending mail to rainbowit10@gmail.com.",
    },
    {
      id: "collapseThree3",
      headerId: "headingThree3",
      title: "Can I get update regularly and For how long do I get updates?",
      content:
        "Yes, We will get update the Unimart. And you can get it any time. Next time we will comes with more feature. You can be get update for unlimited times. Our dedicated team works for update.",
    },
    {
      id: "collapseThree4",
      headerId: "headingThree4",
      title: "15 Things To Know About E-commerce?",
      content:
        "If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph.",
    },
  ];

  return (
    <div className="rbt-accordion-area accordion-style-1 rbt-bg-color-white rbt-section-gap">
      <div className="container">
        <div className="row gx-5 gy-0 align-items-center justify-content-center">
          <div className="col-lg-8 offset-lg-1">
            <div className="rbt-accordion-style accordion">
              <div className="section-title text-center mb--60">
                <span className="subtitle bg-pink-opacity">FAQ</span>
                <h2 className="title">
                  Have a Question with <br />
                  Unimart E-commerce Website?
                </h2>
                <p className="description has-medium-font-size mt--20 w-82 mx-auto">
                  <strong>Unimart</strong> is a modern and user-friendly
                  e-commerce platform designed to make online shopping simple,
                  secure, and convenient.
                </p>
              </div>
              <div className="rbt-accordion-style rbt-accordion-04 accordion">
                <div className="accordion" id="accordionExamplec3">
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
                        data-bs-parent="#accordionExamplec3"
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
    </div>
  );
}
