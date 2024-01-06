"use client"

import React, { useState } from 'react';
import styles from './commentForm.module.css';

interface CommentFormProps {
    path: string;
    slug: string;
}

const CommentForm: React.FC<CommentFormProps> = ({ slug, path }) => {
  const [user, setUser] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
    //   const response = await fetch(`../api/blog/${slug}/comment`, {
          const res = await fetch(`https://luke-waltz-personal-website.vercel.app/api/db/${path}/${slug}/comment`, {
//   const res = await fetch(`http://localhost:3000/api/db/${path}/${slug}/comment`, {
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user,
          comment,
        }),
      });

      if (res.ok) {
        // Handle success, e.g., show a success message
        console.log('Comment submitted successfully!');
        setUser('');
        setComment('');
      } else {
        // Handle errors, e.g., show an error message
        console.error('Error submitting comment:', res.statusText);
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <label className={styles.label}>
        User:
        <input className={styles.input} type="text" value={user} onChange={(e) => setUser(e.target.value)} />
      </label>
      <label className={styles.label}>
        Comment:
        <textarea className={styles.textarea} value={comment} onChange={(e) => setComment(e.target.value)} />
      </label>
      <button className={styles.button} type="submit">Submit Comment</button>
    </form>
  );
};

export default CommentForm;
