import { Divider, Paper, Tab, Tabs, Typography } from "@material-ui/core";
import React from "react";
import AddCommentForm from "../AddCommentForm";
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
  const [active, setActive] = React.useState(0);

  return (
    <Paper elevation={0} className="mt-40 p-30">
      <div className="container">
        <Typography variant="h6" className="mb-20">
          42 комментария
        </Typography>
        <Tabs
          className="mt-20"
          value={active}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab onClick={()=> setActive(0)} label="Популярные" />
          <Tab onClick={()=> setActive(1)} label="По порядку" />
        </Tabs>
        <Divider />
        <AddCommentForm />
        <div className="mb-20" />
        {items.map((item) => (
          <Comment
            key={item.id}
            user={item.user}
            text={item.text}
            createdAt={item.createdAt}
          />
        ))}
      </div>
    </Paper>
  );
};

export default PostComments;
