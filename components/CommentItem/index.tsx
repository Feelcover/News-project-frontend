import Link from "next/link";
import React from "react";
import styles from "./CommentItem.module.scss";

interface CommentItemProps {
  user: {
    id: string;
    fullname: string;
    avatarUrl: string;
  };
  text: string;
  post: {
    title: string;
  };
}

export const CommentItem: React.FC<CommentItemProps> = ({
  user,
  text,
  post,
}) => {
  return (
    <div className={styles.commentItem}>
      <div className={styles.userInfo}>
        <img src={user.avatarUrl} alt="avatar" />
        <Link href={`/profile/${user.id}`}>
          <a href="#">
            <b>{user.fullname}</b>
          </a>
        </Link>
      </div>
      <p className={styles.text}>{text}</p>
      <a href="#">
        <span className={styles.postTitle}>{post.title}</span>
      </a>
    </div>
  );
};
