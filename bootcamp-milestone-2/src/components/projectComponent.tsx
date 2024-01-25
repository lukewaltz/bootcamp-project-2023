import React from 'react';
import style from './project.module.css'
import Image from 'next/image';
import Link from 'next/link';
import ProjectModel, { ProjectData } from '@/database/projectSchema';

function parseProjectTime(time: string | Date) {
  const commentTime = typeof time === "string" ? new Date(time) : time;

  const year: number = commentTime.getFullYear();
  const month: string = commentTime.toLocaleString("default", {
    month: "long",
  });
  const day: number = commentTime.getDate();
  return `${month}, ${year}`;
}

export default function ProjectComponent(props: ProjectData) {
  console.log("PROPS: ", props);
  return (
<div className={style.div}>
  <h3 className={style.h3}>{props.name}</h3>
  <span>{parseProjectTime(props.date)}</span>
  <div className={style.row}>
    <Image src={props.image} alt={props.name} className={style.image} height={400} width={400} />
    <Image src={props.image2} alt={props.name} className={style.image} height={400} width={400} />
  </div>
    <p className={style.p}>{props.content}</p>
    <Link href={props.repoLink}> <div className={style.link}> Go to Repo </div> </Link>
</div>
  );
}