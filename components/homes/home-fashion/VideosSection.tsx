export default function VideosSection() {
  return (
    <div className="rbt-component-area rbt-products-area rbt-section-gap rbt-bg-color-gray-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title text-center border-0 p-0 align-items-center">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                <span className="rbt-bold--text">We are on </span>Youtube Shorts
              </h2>
            </div>
          </div>
        </div>
        {/* Start Tiktok Card Area */}
        <div className="row row--12 mt_dec--24 rbt-mobile-row">
          {/* Start Single Card  */}
          <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-6 mt--24">
            <div className="rbt-youtube-iframe">
              <iframe
                className="autoplay-video"
                src="https://www.youtube.com/embed/HtiC2xfb6us?autoplay=1&mute=1&loop=1&playlist=HtiC2xfb6us"
                title="YouTube Short"
                allow="autoplay"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          {/* End Single Card  */}
          {/* Start Single Card  */}
          <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-6 mt--24">
            <div className="rbt-youtube-iframe">
              <iframe
                className="autoplay-video"
                src="https://www.youtube.com/embed/Xv5NgMcgtw0?autoplay=1&mute=1&loop=1&playlist=Xv5NgMcgtw0"
                title="YouTube Short"
                allow="autoplay"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          {/* End Single Card  */}
          {/* Start Single Card  */}
          <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-6 mt--24">
            <div className="rbt-youtube-iframe">
              <iframe
                className="autoplay-video"
                src="https://www.youtube.com/embed/6VOBrGy_Z4k?autoplay=1&mute=1&loop=1&playlist=6VOBrGy_Z4k"
                title="YouTube Short"
                allow="autoplay"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          {/* End Single Card  */}
          {/* Start Single Card  */}
          <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-6 mt--24">
            <div className="rbt-youtube-iframe">
              <iframe
                className="autoplay-video"
                src="https://www.youtube.com/embed/J-16DVDHxHE?autoplay=1&mute=1&loop=1&playlist=J-16DVDHxHE"
                title="YouTube Short"
                allow="autoplay"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          {/* End Single Card  */}
        </div>
        {/* End Card Area */}
      </div>
    </div>
  );
}
