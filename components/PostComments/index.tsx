import { Divider, Paper, Tab, Tabs, Typography } from "@material-ui/core";
import React from "react";
import AddCommentForm from "../AddCommentForm";
import { Comment } from "../Comment";
import data from "../../data";
import styles from "./PostComments.module.scss";



const PostComments: React.FC = () => {
  const [active, setActive] = React.useState(0);
  const comments = data.comments[active ? "new" : "popular"];

  return (
    <Paper elevation={0} className="mt-40 p-30">
      <div className="container">
        <Typography variant="h6" className="mb-20">
          10 комментариев
        </Typography>
        <Tabs
          className="mt-20"
          value={active}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab onClick={()=> setActive(0)} label="Популярные" />
          <Tab onClick={()=> setActive(1)} label="Новые" />
        </Tabs>
        <Divider />
        <AddCommentForm />
        <div className="mb-20" />
        {comments.map((item) => (
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
