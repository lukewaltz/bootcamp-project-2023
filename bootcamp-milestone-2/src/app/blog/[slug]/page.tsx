import React from "react";
import style from "../../../components/blogComponent.module.css";
import Image from "next/image";
import BlogComponent from "@/components/blogComponent";


type Props = {
  params: { slug: string }
}

async function getBlog(slug: string) {
      const res = await fetch(
        `http://localhost:3000/api/db/blog/${slug}`, 
        {
          cache: "no-store",	
        }
      );
  
      if (res.ok) {
        return res.json();
      }
  
      return null;
  }
  
  export default async function Blog({ params: { slug } }: Props) {
      const blog = await getBlog(slug);
  
      if (blog) 
      {
        return (
          <div>
            <BlogComponent
              name={blog.name}
              slug={blog.slug}
              date={blog.date}
              image={blog.image}
              description={blog.description}
              text={blog.text}
            />
          </div>
        );
      } else {
        return(
          <div className="blog-not-found">
            <h1 className="blog-not-found-text">Blog not found</h1>
          </div>
        );
      }
    }
  
  