import React from 'react';
import style from './project.module.css'
import Image from 'next/image';
import ProjectModel, { ProjectData } from '@/database/projectSchema';

export default function ProjectComponent(props: ProjectData) {
  console.log("PROPS: ", props);
  return (
<div className={style.div}>
  <h3 className={style.h3}>{props.name} | {props.date}</h3>
  <div>
    <Image src={props.image} alt={props.name} className={style.image} height={300} />
    <p className={style.p}>{props.content}</p>
  </div>
</div>
  );
}