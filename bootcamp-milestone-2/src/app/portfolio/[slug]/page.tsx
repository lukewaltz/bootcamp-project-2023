import React from "react";
import ProjectComponent from "@/components/projectComponent";
import Comment from "@/components/commentComponent";
import { IComment } from "@/database/blogSchema";
import CommentForm from "@/components/commentForm";

type Props = {
  params: { slug: string };
};

async function getProject(slug: string) {
  const res = await fetch(
    // `http://localhost:3000/api/db/portfolio/${slug}`,
    `https://luke-waltz-personal-website.vercel.app/api/db/portfolio/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (res.ok) {
    return res.json();
  }

  return null;
}

export default async function Project({ params: { slug } }: Props) {
  const proj = await getProject(slug);

  if (proj) {
    return (
      <div>
        <ProjectComponent
          name={proj.name}
          slug={proj.slug}
          date={proj.date}
          image={proj.image}
          content={proj.content}
          comments={proj.comments}
          image2={proj.image2}
          repoLink={proj.repoLink}
        />
        <div className="comments">
          {proj.comments.map((comment: IComment, index: number) => (
            <Comment key={index} comment={comment} />
          ))}
        </div>
        <CommentForm path={"portfolio"} slug={slug} />
      </div>
    );
  } else {
    return (
      <div className="project-not-found">
        <h1 className="project-not-found-text">Project not found</h1>
      </div>
    );
  }
}
