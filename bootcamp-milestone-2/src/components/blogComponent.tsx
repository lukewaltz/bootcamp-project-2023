import React from 'react';
import style from './blogComponent.module.css'
import Image from 'next/image';
import BlogModel, { BlogData } from '@/database/blogSchema';

export default function BlogComponent(props: BlogData) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
<div className={style.div}>
<Image src={props.image} alt={props.name} className={style.image} width={200} height={200} />

    <div className='dateStack'>
        <h3 className={style.h3}>{props.name}</h3> 
        <p className={style.p}>Posted on {new Date(props.date).toLocaleString()}</p>
    </div>
  
    <div>
        <p className={style.p}>{props.text}</p>
    </div>
</div>
  );
}

          //       <div className={blogstyle.div}>
          //         <div>
          //             <h3 className={blogstyle.h3}>Title:{blog.name}</h3> 
          //             {/* <Image src={props.image} alt={props.name} className={style.image} width={300} height={300} /> */}
          //             <p className={blogstyle.p}>Posted on {new Date(blog.date).toLocaleString()}</p>
          //         </div>
          //         <div>
          //             <p className={blogstyle.p}>{blog.text}</p>
          //         </div>
          //       </div>