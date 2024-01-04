import React from "react";
import style from "./blogComponent.module.css";
import Image from "next/image";
import BlogModel, { BlogData } from "@/database/blogSchema";

export default function BlogComponent(props: BlogData) {
  return (
    <div className={style.div}>
      <div className="colFlex">
        <h3 className={style.h3}>
          {props.name} | {new Date(props.date).toLocaleString()}
        </h3>
        <div className="rowFlex">
          <Image
            src={props.image}
            alt={props.name}
            className={style.image}
            width={200}
            height={200}
          />
          <p className={style.p}>{props.text}</p>
        </div>
      </div>
    </div>
  );
}
