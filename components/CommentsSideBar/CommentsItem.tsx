import React from 'react';
import styles from './CommentsSideBar.module.scss';
import { Avatar } from '@material-ui/core';


interface CommentItemProps {
    user: string;
    text: string;
    post: string;
  }


export const CommentItem: React.FC = () => {
  return (
    <div className={styles.commentItem}>
      <div className={styles.userInfo}>
      <Avatar
          className={styles.avatar}
          alt="Remy Sharp"
          src="https://i.playground.ru/p/vOQQQO7dUl7oVvbUNJlDJQ.png?255x255"
        />
          <a>
            <b>"Александр Гончаров"</b>
          </a>
      </div>
      <p className={styles.text}>Это тестовый комментарий</p>
        <a>
          <span className={styles.postTitle}>Заголовок новости</span>
        </a>
    </div>
  );
};
