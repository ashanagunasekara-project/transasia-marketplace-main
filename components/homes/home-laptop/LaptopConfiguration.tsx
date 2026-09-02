import Image from 'next/image';

export default function LaptopConfiguration() {
  return (
    <div className="rbt-component-area rbt-section-gapBottom">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="rbt-component-section-title text-center border-0 p-0 mb--56 mb_sm--32 align-items-center">
                        <a href="#" className="rbt-card-subtitle rbt-card-catagories-text mt--0 rbt-scroll-trigger fade_in animation-order-1">The Biggest View!</a>
                        <h2 className="rbt-title h1 rbt-scroll-trigger fade_in animation-order-1"><span className="rbt-bold--text">Let Life Be Lighter, <br /> Said Ultimate Book </span></h2>
                        <p className="description rbt-scroll-trigger fade_in animation-order-2">
                            Flip all day, and then some more with the largest battery and fastest charging on a Flip phone in the segment.
                        </p>
                        <div className="d-flex flex-wrap justify-content-center rbt-gap-lr--48">
                            <div className="d-flex align-items-center rbt-gap--12">
                                <span className="h1 mb--0 rbt-text-gradient-secondary">1.24kg</span>
                                <span className="h4 mb--0">Weight</span>
                            </div>
                            <div className="d-flex align-items-center rbt-gap--12">
                                <span className="h1 mb--0 rbt-text-gradient-secondary">14.8mm</span>
                                <span className="h4 mb--0">Thickness</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <figure>
                        <Image src="/assets/images/product-banner/product-banner-img-laptop-sm-03.webp" alt="Banner Image" width={1286} height={806} />
                    </figure>
                </div>
            </div>
        </div>
    </div>
  )
}
