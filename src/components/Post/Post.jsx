import React from "react";
import postImg from './postimg.png';
import styles from './post.module.css';

const Post = () => {
  return (
    <article className={styles.post}>
      <img src={postImg} alt="" className={styles.img} />
      <div className={styles.info}>
        <p className={styles.date}>11 April 2023</p>
        <h5 className={styles.title}>My Title</h5>
        <p className={styles.descr}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, ad.
        </p>
      </div>
    </article>
  );
};

export default Post;
