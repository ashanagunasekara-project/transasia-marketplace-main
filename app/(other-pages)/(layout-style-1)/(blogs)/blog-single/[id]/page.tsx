import BlogSingle from "@/components/blogs/BlogSingle";
import RelatedBlogs from "@/components/blogs/RelatedBlogs";
import { allPosts } from "@/data/blogs";
import { notFound } from "next/navigation";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Single || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Single blog article page with related Unimart posts.",
};

type BlogSinglePageProps = {
  params: Promise<{
    id: number;
  }>;
};

export default async function BlogSinglePage({ params }: BlogSinglePageProps) {
  const { id } = await params;
  const blog = allPosts.find((post) => post.id == id);
  if (!blog) {
    return notFound();
  }

  return (
    <>
      <BlogSingle blog={blog} />
      <RelatedBlogs />
    </>
  );
}
