import React from "react";
import { CommentItem } from "../CommentItem";
import {
  NavigateNextOutlined as ArrowRightIcon,
  NavigateBeforeOutlined as ArrowLeftIcon,
} from "@material-ui/icons/";
import data from "../../data";
import styles from "./SideComments.module.scss";

export const SideComments = () => {
  const [active, setActive] = React.useState(true);

  return (
    <div className={styles.root} >
      <h3 onClick={() => setActive(!active)}>Комментарии {active ? <ArrowRightIcon /> : <ArrowLeftIcon />}</h3>
      {active &&
        data.comments.popular.map((obj) => (
          <CommentItem key={obj.id} {...obj} />
        ))}
    </div>
  );
};
