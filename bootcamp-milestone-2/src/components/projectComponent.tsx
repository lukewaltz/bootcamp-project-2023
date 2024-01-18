import React from 'react';
import style from './project.module.css'
import Image from 'next/image';
import Link from 'next/link';
import ProjectModel, { ProjectData } from '@/database/projectSchema';

export default function ProjectComponent(props: ProjectData) {
  console.log("PROPS: ", props);
  return (
<div className={style.div}>
  <h3 className={style.h3}>{props.name} | {props.date}</h3>
  <div>
    <Image src={props.image} alt={props.name}  height={400} width={400} />
    <Image src={props.image2} alt={props.name}  height={400} width={400} />
    <p className={style.p}>{props.content}</p>
    <Link href={props.repoLink} />
  </div>
</div>
  );
}