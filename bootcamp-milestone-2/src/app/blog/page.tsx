import React from 'react';
import style from './blogPost.module.css'; // Import the CSS module
import Image from 'next/image';
import BlogComponent from '@/components/blogComponent';
import Link from 'next/link';
import BlogModel, {BlogData} from '@/database/blogSchema';
import connectDB from '@/helpers/db';

async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await BlogModel.find().lean().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
      console.log(blogs)
	    return blogs
	} catch (err) {
    console.error("error getting data from DB ", err);
	    return null
	}
}

export default async function BlogPost() {
  const blogData = await getBlogs();
  (blogData ? console.log(blogData[0]) : null);

  return(

      <header className={style.blogPost}>
        <main>
          {blogData ? (
            blogData.map((blog) => (
              <div key={blog._id}>
                <Link href={"/blog/" + blog.slug}>
                  <BlogComponent {...blog} />
                </Link>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </main>
      </header>
  )
}

// export default BlogPost;
