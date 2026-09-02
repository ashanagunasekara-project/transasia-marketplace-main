import Link from "next/link";

const infBoxes = [
  {
    id: 1,
    iconClass: "fa-light fa-truck-fast",
    title: "Free Shipping",
    description: "From all orders over $100",
  },
  {
    id: 2,
    iconClass: "fa-light fa-headset",
    title: "Quality Support",
    description: "24/7 online feedback",
  },
  {
    id: 3,
    iconClass: "fa-light fa-box",
    title: "Return & Refund",
    description: "Return money within 30 days",
  },
  {
    id: 4,
    iconClass: "fa-light fa-ticket",
    title: "Gift Voucher",
    description: "20% off when you shop online",
  },
  {
    id: 5,
    iconClass: "fa-light fa-headset",
    title: "Quality Support",
    description: "24/7 online feedback",
  },
];

const helpSections = [
  {
    id: 1,
    iconClass: "fa-regular fa-truck-fast",
    title: "Delivery & Shipping",
    links: [
      {
        label: "Do you offer express delivery options?",
        link: "/help-article",
      },
      {
        label: "Will I need to pay customs fees for my parcel?",
        link: "/help-article",
      },
      {
        label: "Do you ship internationally?",
        link: "/help-article",
      },
      {
        label: "Why do I see a recurring charge on my statement?",
        link: "/help-article",
      },
      {
        label: "How can I track my order in real time?",
        link: "/help-article",
      },
    ],
  },
  {
    id: 2,
    iconClass: "fa-regular fa-right-left",
    title: "Returns & Refunds",
    links: [
      {
        label: "What is your return policy?",
        link: "/help-article",
      },
      {
        label: "Can I still get a refund if I return an item after 45 days?",
        link: "/help-article",
      },
      {
        label: "How do I send an item back for a return?",
        link: "/help-article",
      },
      {
        label: "What is your return policy?",
        link: "/help-article",
      },
      {
        label: "Can I exchange an item instead of getting a refund?",
        link: "/help-article",
      },
    ],
  },
  {
    id: 3,
    iconClass: "fa-regular fa-money-check",
    title: "Payment & Billing",
    links: [
      {
        label: "What should I do if my payment is declined?",
        link: "/help-article",
      },
      {
        label: "When will I be charged for my order?",
        link: "/help-article",
      },
      {
        label: "How do I place an order?",
        link: "/help-article",
      },
      {
        label: "Can I pay using Google Pay?",
        link: "/help-article",
      },
      {
        label: "How do I use a Gift Voucher for my order?",
        link: "/help-article",
      },
    ],
  },
  {
    id: 4,
    iconClass: "fa-regular fa-basket-shopping-simple",
    title: "Order Issues",
    links: [
      {
        label: "What should I do if I receive a faulty item?",
        link: "/help-article",
      },
      {
        label: "Can I change my order after placing it?",
        link: "/help-article",
      },
      {
        label: "What if I get the wrong item in my order?",
        link: "/help-article",
      },
      {
        label: "Can I cancel or return a gift voucher?",
        link: "/help-article",
      },
      {
        label: "How do I resolve issues with my customs invoice?",
        link: "/help-article",
      },
    ],
  },
  {
    id: 5,
    iconClass: "fa-regular fa-layer-plus",
    title: "Products & Availability",
    links: [
      {
        label: "Where can I find your size guide?",
        link: "/help-article",
      },
      {
        label: "Where can I check product care instructions?",
        link: "/help-article",
      },
      {
        label: "Can you tell me more about the Collusion brand?",
        link: "/help-article",
      },
      {
        label: "How do I update my Fit Assistant information?",
        link: "/help-article",
      },
      {
        label: "What are your guidelines for adhesive products?",
        link: "/help-article",
      },
    ],
  },
  {
    id: 6,
    iconClass: "fa-regular fa-gear",
    title: "Manage Your Account",
    links: [
      {
        label: "How do I create an account?",
        link: "/help-article",
      },
      {
        label: "I'm having trouble signing in—what should I do?",
        link: "/help-article",
      },
      {
        label: "What if I have issues using the app?",
        link: "/help-article",
      },
      {
        label: "Do I need an account to place an order?",
        link: "/help-article",
      },
      {
        label: "How do I delete my account?",
        link: "/help-article",
      },
    ],
  },
  {
    id: 7,
    iconClass: "fa-regular fa-gift",
    title: "Discounts & Promotions",
    links: [
      {
        label: "How do I apply a discount code at checkout?",
        link: "/help-article",
      },
      {
        label: "Why isn’t my promo code working?",
        link: "/help-article",
      },
      {
        label: "Do you offer student or military discounts?",
        link: "/help-article",
      },
      {
        label: "Can I use multiple discount codes on one order?",
        link: "/help-article",
      },
      {
        label: "How can I stay updated on upcoming sales and promotions?",
        link: "/help-article",
      },
    ],
  },
  {
    id: 8,
    iconClass: "fa-regular fa-shield-keyhole",
    title: "Security & Privacy",
    links: [
      {
        label: "How do you protect my personal information?",
        link: "/help-article",
      },
      {
        label: "Is my payment information secure?",
        link: "/help-article",
      },
      {
        label: "Do you store my credit card details?",
        link: "/help-article",
      },
      {
        label: "How can I update my privacy settings?",
        link: "/help-article",
      },
      {
        label: "How do I unsubscribe from marketing emails?",
        link: "/help-article",
      },
    ],
  },
  {
    id: 9,
    iconClass: "fa-regular fa-phone",
    title: "Customer Support",
    links: [
      {
        label: "How can I contact customer service?",
        link: "/help-article",
      },
      {
        label: "What are your customer service hours?",
        link: "/help-article",
      },
      {
        label: "Do you offer live chat support?",
        link: "/help-article",
      },
      {
        label: "How long does it take to get a response from support?",
        link: "/help-article",
      },
      {
        label: "Where can I leave feedback or a complaint?",
        link: "/help-article",
      },
    ],
  },
];

export default function HelpLinks() {
  return (
    <div className="rbt-component-area rbt-section-gapBottom rbt-bg-color-gray-light pt--24">
      <div className="container">
        <div className="rbt-bg-color-brand-200 rbt-rounded--8 mb--24 p--48">
          <div className="row row--12">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6 mx-auto">
              <div className="rbt-component-section-title text-center border-0 p-0 mb--0 align-items-left">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">Find Your</span> Answer Fast
                </h2>
                <input
                  className="rbt-border-color-brand-300 rbt-bg-color-white"
                  type="text"
                  placeholder="What can we help you with?"
                />
              </div>
            </div>
            <div className="col-12 d-none d-md-block mt--40">
              <ul className="rbt-inf-box-wrapper-list justify-content-center rbt-gap--16">
                {infBoxes.map((box, index) => (
                  <li key={box.id}>
                    <div
                      className={`rbt-inf-box rbt-scroll-trigger fade_in animation-order-${index + 1}`}
                    >
                      <div className="rbt-inf-box-icon">
                        <i className={box.iconClass} />
                      </div>
                      <div className="rbt-inf-box-content">
                        <h6 className="rbt-inf-box-title">{box.title}</h6>
                        <p className="rbt-inf-box-desc">{box.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="row row--12 mt_dec--24">
          {helpSections.map((section) => (
            <div key={section.id} className="col-12 col-md-6 col-lg-4 mt--24">
              <div className="rbt-nav-box">
                <div className="inner">
                  <div className="rbt-nav-box-top">
                    <div className="rbt-nav-box-title-part">
                      <h5 className="rbt-title mb--0">
                        <span className="rbt-text-regular mr--4 h6 rbt-text-color-gray-600">
                          <i className={section.iconClass} />
                        </span>
                        {section.title}
                      </h5>
                    </div>
                  </div>
                  <hr className="rbt-separator rbt-separator-gray200 mt--16 mb--16 rbt-bg-color-gray-100" />
                  <div className="rbt-nav-items rbt-nav-items-1">
                    <ul className="rbt-nav-item-list">
                      {section.links.map((item, index) => (
                        <li key={index}>
                          <Link href={item.link} className="rbt-btn-link">
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
