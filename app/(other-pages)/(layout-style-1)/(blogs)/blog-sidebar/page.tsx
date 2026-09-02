import Blogs1 from "@/components/blogs/Blogs1";
import Breadcrumb from "@/components/common/other-components/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Sidebar || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Blog layout with sidebar navigation and Unimart posts.",
};

export default function page() {
  return (
    <>
      <Breadcrumb
        className="rbt-breadcrumb-two rbt-bg-color-gray-light"
        subtitle=""
        hasHrLine
        title="Blog Sidebar"
      />

      <Blogs1 />
    </>
  );
}
