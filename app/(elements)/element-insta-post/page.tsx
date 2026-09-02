import { Metadata } from "next";
import InstagramPostsStyleOne from "@/components/elements/element-insta-post/InstagramPostsStyleOne";
import InstagramPostsStyleTwo from "@/components/elements/element-insta-post/InstagramPostsStyleTwo";
import InstagramPostsStyleThree from "@/components/elements/element-insta-post/InstagramPostsStyleThree";
import InstagramPostsStyleFour from "@/components/elements/element-insta-post/InstagramPostsStyleFour";
import ElementsHero from "@/components/elements/ElementsHero";
export const metadata: Metadata = {
  title:
    "Element Insta Post | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function ElementInstaPostPage() {
  return (
    <>
      <>
        <ElementsHero
          title={
            <>
              Exclusive <span>Instagram Post</span>
            </>
          }
        />
        <InstagramPostsStyleOne />
        <InstagramPostsStyleTwo />
        <InstagramPostsStyleThree />
        <InstagramPostsStyleFour />
      </>
    </>
  );
}
