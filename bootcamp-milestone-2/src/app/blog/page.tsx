import React from "react";
import style from "./blogPost.module.css"; // Import the CSS module
import Link from "next/link";
import BlogModel from "@/database/blogSchema";
import connectDB from "@/helpers/db";
import BlogPreview from "@/components/blogPreview";

async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await BlogModel.find().lean().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    console.error("error getting data from DB ", err);
    return null;
  }
}

export default async function BlogPost() {
  const blogs = await getBlogs();

  return (
    <header className={style.blogPost}>
      <main>
        {blogs ? (
          blogs.map((blog, index) => (
            <Link href={"/blog/" + blog.slug} key={index}>
              <BlogPreview
                name={blog.name}
                slug={blog.slug}
                date={blog.date}
                description={blog.description}
                text={blog.text}
              />
            </Link>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </header>
  );
}