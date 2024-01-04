import React from "react";
import { IComment } from "@/database/blogSchema";
import styles from "./comment.module.css";

type CommentProps = {
  comment: IComment;
};

function parseCommentTime(time: string | Date) {
  const commentTime = typeof time === "string" ? new Date(time) : time;

  const year: number = commentTime.getFullYear();
  const month: string = commentTime.toLocaleString("default", {
    month: "long",
  });
  const day: number = commentTime.getDate();
  const hour: number = commentTime.getUTCHours();
  const min: number = commentTime.getMinutes();
  return `${day} ${month}, ${year} ${hour.toString().padStart(2, "0")}:${min
    .toString()
    .padStart(2, "0")}`;
}

function Comment({ comment }: CommentProps) {
  return (
    <div className={styles.blogComment}>
      <h4>{comment.user}</h4>
      <p>{comment.comment}</p>
      <span>{parseCommentTime(comment.time)}</span>
    </div>
  );
}

export default Comment;
