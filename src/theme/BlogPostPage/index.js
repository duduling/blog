import React from "react";
import BlogPostPage from "@theme-original/BlogPostPage";
import Comment from "/src/components/Comment";

export default function BlogPostPageWrapper(props) {
  return (
    <>
      <BlogPostPage {...props} />
      <Comment />
    </>
  );
}
