import Blogs2 from "@/components/blogs/Blogs2";
import Breadcrumb from "@/components/common/other-components/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Grid || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Grid layout for Unimart blog posts.",
};

export default function page() {
  return (
    <>
      <Breadcrumb
        className="rbt-breadcrumb-two rbt-bg-color-gray-light"
        subtitle=""
        hasHrLine
        title="Blog Grid"
      />
      <Blogs2 />
    </>
  );
}
