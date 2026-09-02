import { Metadata } from "next";
import BlogBlock01 from "@/components/elements/element-blog-styles/BlogBlock01";
import BlogBlock02 from "@/components/elements/element-blog-styles/BlogBlock02";
import BlogBlock03 from "@/components/elements/element-blog-styles/BlogBlock03";
import BlogBlock04 from "@/components/elements/element-blog-styles/BlogBlock04";
import BlogBlock05 from "@/components/elements/element-blog-styles/BlogBlock05";
import BlogBlock06 from "@/components/elements/element-blog-styles/BlogBlock06";
import ElementsHero from "@/components/elements/ElementsHero";
export const metadata: Metadata = {
  title:
    "Element Blog Styles | Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};
export default function ElementBlogStylesPage() {
  return (
    <>
      <ElementsHero
        title={
          <>
            Exclusive <span>Blog Styles</span>
          </>
        }
      />
      <BlogBlock01 />
      <BlogBlock02 />
      <BlogBlock03 />
      <BlogBlock04 />
      <BlogBlock05 />
      <BlogBlock06 />
    </>
  );
}
