import { Metadata } from "next";
import VideoStyleOne from "@/components/elements/element-video-styles/VideoStyleOne";
import VideoStyleTwo from "@/components/elements/element-video-styles/VideoStyleTwo";
import VideoStyleThree from "@/components/elements/element-video-styles/VideoStyleThree";
import ElementsHero from "@/components/elements/ElementsHero";
export const metadata: Metadata = {
  title:
    "Element Video Styles | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function ElementVideoStylesPage() {
  return (
    <>
      <ElementsHero
        title={
          <>
            Exclusive <span>Video Styles</span>
          </>
        }
      />
      <VideoStyleOne />
      <VideoStyleTwo />
      <VideoStyleThree />
    </>
  );
}
