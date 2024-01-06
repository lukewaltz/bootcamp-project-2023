import React from "react";
import BlogComponent from "@/components/blogComponent";
import Comment from "@/components/commentComponent";
import CommentForm from "@/components/commentForm"; // Import the CommentForm component
import { IComment } from "@/database/blogSchema";

type Props = {
  params: { slug: string };
};

async function getBlog(slug: string) {
  const res = await fetch(`https://luke-waltz-personal-website.vercel.app/api/db/blog/${slug}`, {
  // const res = await fetch(`http://localhost:3000/api/db/blog/${slug}`, {

    cache: "no-store",
  });

  if (res.ok) {
    return res.json();
  }

  return null;
}

export default async function Blog({ params: { slug } }: Props) {
  const blog = await getBlog(slug);

  if (blog) {
    return (
      <div>
        <BlogComponent
          name={blog.name}
          slug={blog.slug}
          date={blog.date}
          image={blog.image}
          description={blog.description}
          text={blog.text}
          comments={blog.comments}
        />
        <div className="comments">
          {blog.comments.map((comment: IComment, index: number) => (
            <Comment key={index} comment={comment} />
          ))}
        </div>

        {/* Comment form after the comments */}
        <CommentForm path={"blog"} slug={slug} />
      </div>
    );
  } else {
    return (
      <div className="blog-not-found">
        <h1 className="blog-not-found-text">Blog not found</h1>
      </div>
    );
  }
}
