import Blogs1 from "@/components/blogs/Blogs1";
import BlogSlider from "@/components/blogs/BlogSlider";
import Breadcrumb from "@/components/common/other-components/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Default || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Default Unimart blog listing page with slider and posts.",
};

export default function page() {
  return (
    <>
      <Breadcrumb
        className="rbt-breadcrumb-two rbt-bg-color-gray-light"
        subtitle=""
        hasHrLine
        title="Blog Default"
      />

      <BlogSlider />
      <Blogs1 isLoadMore={true} />
    </>
  );
}
