import React from 'react';
import style from './blogPreview.module.css'
import blogs, { Blog } from '@/app/blogData';
import Image from 'next/image';

export default function BlogPreview(props: Blog) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
<div className={style.div}>
  <h3 className={style.h3}>{props.name}</h3>
  <div>
    <Image src={props.image} alt={props.name} className={style.image} width={300} height={300} />
    <p>{props.description}</p>
    <p className={style.p}>Posted on {props.date}</p>
    {/* <p className={style.p}>{props.text}</p> */}
  </div>
</div>
  );
}