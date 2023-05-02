import React from "react";
import ArrowRightIcon from "@material-ui/icons/NavigateNextOutlined";

import styles from "./SideComments.module.scss";

export const comments = [
  {
    id: 1,
    user: {
      fullname: "Вася Пупкин",
      avatarUrl: "https://i.playground.ru/e/RwI1VTZpbZS9M9_4BRvDZg.jpeg?1200x1200",
    },
    text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…",
    post: {
      title: "Какая у вас дома ванна?",
    },
    createdAt: new Date().toString(),
  },
  {
    id: 2,
    user: {
      fullname: "Вася Пупкин",
      avatarUrl: "https://i.playground.ru/e/SpksLfceH8UYiD61mwqLHA.png.webp?250x140",
    },
    text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…",
    post: {
      title: "Какая у вас дома ванна?",
    },
    createdAt: new Date().toString(),
  },
  {
    id: 3,

    user: {
      fullname: "Вася Пупкин",
      avatarUrl: "https://i.playground.ru/e/SpksLfceH8UYiD61mwqLHA.png.webp?250x140",

    },
    text: "Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…",
    post: {
      title: "Какая у вас дома ванна?",
    },
    createdAt: new Date().toString(),
  },
];

interface CommentItemProps {
  user: {
    fullname: string;
    avatarUrl: string;
  };
  text: string;
  post: {
    title: string;
  };
}

const CommentItem: React.FC<CommentItemProps> = ({ user, text, post }) => {
  return (
    <div className={styles.commentItem}>
      <div className={styles.userInfo}>
        <img src={user.avatarUrl} />
        <a href="#">
          <b>{user.fullname}</b>
        </a>
      </div>
      <p className={styles.text}>{text}</p>
      <a href="#">
        <span className={styles.postTitle}>{post.title}</span>
      </a>
    </div>
  );
};

export const SideComments = () => {
  return (
    <div className={styles.root}>
      <h3>
        Комментарии <ArrowRightIcon />
      </h3>
      {comments.map((obj) => (
        <CommentItem key={obj.id} {...obj} />
      ))}
    </div>
  );
};
