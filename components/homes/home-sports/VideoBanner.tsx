import VideoModal from "@/components/common/ui/VideoModal";
import Image from "next/image";

export default function VideoBanner() {
  return (
    <div className="rbt-component-area rbt-video-area">
      <div className="wrapper">
        <div className="video-popup-wrapper video-popup-style-one has-black-overlay rbt-rounded--0">
          <Image
            className="w-100 rbt-scroll-trigger zoom_in animation-order-1"
            alt="Video Images"
            src="/assets/images/others/video-02.webp"
            width={3840}
            height={1000}
          />
          <VideoModal videoUrl="https://www.youtube.com/watch?v=abFXQQzFVDc">
            <a
              href="#"
              className="rbt-btn rounded-player popup-video position-to-top rbtplayer"
            >
              <span>
                <i className="fa-solid fa-play" />
              </span>
            </a>
          </VideoModal>
        </div>
      </div>
    </div>
  );
}
