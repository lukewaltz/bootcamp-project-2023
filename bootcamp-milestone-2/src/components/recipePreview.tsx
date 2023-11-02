import React from 'react';
import style from './recipePreview.module.css'

export default function BlogPreview({ name, description, image, posted, text }) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className={style.div}>
      <h3>{name}</h3>
      <div>
        {image && <img src={image} alt={name} className={style.image} />} {/* Display the blog's image */}
        <p>{description}</p>
        <p>Posted on {posted}</p>
        <p>{text}</p> {/* Display the blog's text content */}
      </div>
	  </div>
  );
}