import React from "react";
import Image from "next/image";

export type SplashElementBuilderCard = {
  number: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

type SplashElementBuilderSectionProps = {
  sectionTitle?: React.ReactNode;
  sectionDescription?: React.ReactNode;
  cards?: SplashElementBuilderCard[];
  primaryCtaHref?: string;
  primaryCtaLabel?: React.ReactNode;
  docsHref?: string;
  docsLabel?: React.ReactNode;
};

export default function SplashElementBuilderSection({
  sectionTitle = "Secure Your Purchase in Advance",
  sectionDescription = (
    <>
      Explore our collection of pre-built compare tables designed to help you
      showcase <br />
      product features effectively. Customize each table to fit your specific
      needs.
    </>
  ),
  cards = [
    {
      number: "01",
      title: "Pre-Order: Secure Your Purchase in Advance",
      description: (
        <>
          Compare your selected products in a table with Unimart Compare Table
          Builder. Choose from a variety of pre-built templates.
        </>
      ),
    },
  ],
  primaryCtaHref = "https://nextjs.getunimart.com/docs",
  primaryCtaLabel = "Check example",
  docsHref = "https://nextjs.getunimart.com/docs",
  docsLabel = "View Docs",
}: SplashElementBuilderSectionProps) {
  return (
    <div className="rbt-splash-element-builder-area splash-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="rbt-splash-section-title text-center mb--48">
              <h2 className="mb--12">
                <span className="rbt-bold--text rbt-scroll-trigger fade_in animation-order-2">
                  {sectionTitle}
                </span>
              </h2>
              <p className="mb--40 b1 rbt-scroll-trigger fade_in animation-order-4">
                {sectionDescription}
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-xl-10 mx-auto">
            <div className="row row--12 mt_dec--24">
              {cards.map((card, idx) => (
                <div key={idx} className="col-12 mt--24">
                  <div className="rbt-ele-builder-card rbt-element-coming-soon card-content-side">
                    <div className="rbt-card-content">
                      <div className="content-inner">
                        <span className="overlay-text">{card.number}</span>
                        <h2 className="rbt-title rbt-text-bold">{card.title}</h2>
                        <p className="rbt-description">{card.description}</p>
                        <div className="mt--32">
                          <a
                            href={primaryCtaHref}
                            className="rbt-btn rbt-btn-md rbt-btn-secondary"
                          >
                            {primaryCtaLabel}
                          </a>
                          <a
                            href={docsHref}
                            className="rbt-btn-link rbt-text-color-gray-500 ml--8"
                          >
                            <span className="btn-icon">
                              <i className="fa-regular fa-book mr--4" />
                            </span>
                            <span className="btn-text">{docsLabel}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="ele-layout-display">
                      <figure className="ele-image">
                        {card.image ? (
                          <Image
                            alt={card.image.alt}
                            src={card.image.src}
                            width={card.image.width}
                            height={card.image.height}
                          />
                        ) : null}
                      </figure>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
