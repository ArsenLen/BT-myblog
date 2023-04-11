import React from 'react';
import styles from './postspage.module.css';
import Post from '../../components/Post/Post';

const PostsPage = () => {
    // вызываем функцию запроса на сервер
    return (
        <section className={styles.posts}>
            <Post />
            <Post />
            <Post />
        </section>
    );
};

export default PostsPage;