import Link from "next/link";
import React from "react";
import styles from "./CommentItem.module.scss";

interface CommentItemProps {
  user: {
    id: number;
    fullname: string;
    avatarUrl: string;
  };
  text: string;
  post: {
    id: number;
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
          <a>
            <b>{user.fullname}</b>
          </a>
        </Link>
      </div>
      <p className={styles.text}>{text}</p>
    <Link href={`/news/${post.id}`}>
    <a>
        <span className={styles.postTitle}>{post.title}</span>
      </a></Link>
    </div>
  );
};
