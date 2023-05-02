import { Divider, Paper, Tab, Tabs, Typography } from "@material-ui/core";
import React from "react";
import { Comment } from "../Comment";
import styles from "./PostComments.module.scss";

type TComment = {
  id: number;
  user: {
    fullname: string;
    avatarUrl: string;
  };
  text: string;
  createdAt: string;
};

interface IComments {
  items: TComment[];
}

const PostComments: React.FC<IComments> = ({ items }) => {
  return (
    <Paper elevation={0} className="mt-40 p-30">
      <Typography variant="h6" className="mb-20">
        42 комментария
      </Typography>
      <Tabs
        className="mt-20"
        value={0}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Популярные" />
        <Tab label="По порядку" />
      </Tabs>
      <Divider />
      <div className="mb-20" />
      {items.map((item) => (
        <Comment
          key={item.id}
          user={item.user}
          text={item.text}
          createdAt={item.createdAt}
        />
      ))}
    </Paper>
  );
};

export default PostComments;
