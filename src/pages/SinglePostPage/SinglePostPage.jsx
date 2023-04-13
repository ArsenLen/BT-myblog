import React from 'react';
import styles from './singlepostpage.module.css';
import postImg from './postimg.png';
import { useParams } from 'react-router-dom';
import postService from '../../services/posts';

const SinglePostPage = () => {
  const { id } = useParams() // useParams() - { id: r3ty34ur46 }
    return (
      <article className={styles.post}>
        <h1 className={styles.title}>My title</h1>
        <img src={postImg} alt="postImg" className={styles.img} />
        <p className={styles.descr}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam enim
          aspernatur cupiditate veritatis vero, porro, aliquam est quos laborum
          voluptates, deleniti repellat eos nobis sed eius facere ipsa nulla vel
          odit fugiat maiores harum numquam illo repellendus. Dignissimos
          laborum ipsam voluptate perspiciatis quisquam veniam quos provident
          esse quo consequatur? Error natus corrupti ad in ab iure fugit hic
          minima tempora culpa aliquid, nulla suscipit quaerat consequuntur unde
          assumenda accusantium minus!
        </p>
        <p className={styles.date}>Published 11 April 2023</p>
      </article>
    );
};

export default SinglePostPage;

/*
  Вызывать функцию для получения поста с id, который мы получаем из useParams()
*/