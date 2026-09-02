const youtubeVideos = [
  "HtiC2xfb6us",
  "Xv5NgMcgtw0",
  "6VOBrGy_Z4k",
  "J-16DVDHxHE",
];
export default function YoutubeVideos() {
  return (
    <div className="rbt-component-area rbt-section-gap">
      <div className="wrapper plr--80 plr_xl--30 plr_lg--20 plr_md--20 plr_sm--20">
        <div className="rbt-gray-contain-box rbt-gray-contain-box-style-one rbt-bg-color-gray-light">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center border-0 p-0 align-items-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">We are on </span>Youtube
                  Shorts
                </h2>
              </div>
            </div>
          </div>
          {/* Start Tiktok Card Area */}
          <div className="row row--12 mt_dec--24 rbt-mobile-row">
            {youtubeVideos.map((videoId, index) => (
              <div
                key={index}
                className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-6 mt--24"
              >
                <div className="rbt-youtube-iframe">
                  <iframe
                    className="autoplay-video"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
                    title="YouTube Short"
                    allow="autoplay"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
          {/* End Card Area */}
        </div>
      </div>
    </div>
  );
}
