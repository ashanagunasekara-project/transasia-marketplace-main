import Features3 from "@/components/common/features/Features3";
import TextSlider2 from "@/components/common/other-components/TextSlider2";
import Footer4 from "@/components/footers/Footer4";
import Header15 from "@/components/headers/Header15";
import Banner from "@/components/homes/home-fashion-two/Banner";
import Blogs from "@/components/homes/home-fashion-two/Blogs";
import Categories from "@/components/homes/home-fashion-two/Categories";
import Hero from "@/components/homes/home-fashion-two/Hero";
import Products1 from "@/components/homes/home-fashion-two/Products1";
import YoutubeVideos from "@/components/homes/home-fashion-two/YoutubeVideos";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home Fashion 02 || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      <Header15 containerClass="rbt-full-width-wrapper" sticky={true} />
      <Hero />
      <Categories />
      <Products1 wrapperBox="wrapper plr--80 plr_xl--30 plr_lg--20 plr_md--20 plr_sm--20" />
      <Banner wrapperBox="wrapper plr--80 plr_xl--30 plr_lg--20 plr_md--20 plr_sm--20" />
      <TextSlider2 />
      <YoutubeVideos />
      <Blogs wrapperBox="wrapper plr--80 plr_xl--30 plr_lg--20 plr_md--20 plr_sm--20" />
      <Features3 parentClass="rbt-component-area rbt-quick-inf-area rbt-bg-color-white rbt-section-gap2" />
      <Footer4 />
    </>
  );
}
