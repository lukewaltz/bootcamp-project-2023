import React from "react";
import style from "./portfolio.module.css";
import Image from "next/image";
import Link from "next/link";
import Project from "@/database/projectSchema";
import connectDB from "@/helpers/db";
import ProjectComponent from "@/components/projectComponent";

async function getProjects() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const projects = await Project.find().lean().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    console.log(projects);
    return projects;
  } catch (err) {
    console.error("error getting proj data from DB ", err);
    return null;
  }
}

export default async function Portfolio() {
  const projectData = await getProjects();
  projectData ? console.log(projectData[0]) : null;

  console.log("project data:", projectData);

  return (
    <header className={style.portfolio}>
      <main>
        {projectData
          ? projectData.map((project, index) => (
              <div key={index}>
                <Link href={"/portfolio/" + project.slug}>
                  <ProjectComponent
                    name={project.name}
                    slug={project.slug}
                    date={project.date}
                    image={project.image}
                    content={project.content}
                    comments={project.comments}
                    image2={project.image2}
                    repoLink={project.repoLink}
                  />
                </Link>
              </div>
            ))
          : null}
          <div> </div>
      </main>
    </header>
  );
}
