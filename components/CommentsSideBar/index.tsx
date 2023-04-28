import React from 'react';
import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';
import styles from './CommentsSideBar.module.scss';
import clsx from 'clsx';
import { CommentItem } from './CommentsItem';


export const CommentsSideBar = () => {
  const [open, setOpen] = React.useState(true);

  const toggleComments = () => {
    setOpen(!open);
  };
  return (
    <div className={clsx(styles.menuSideBar, !open && styles.menuSideBarActive)}>
      <h3 onClick={toggleComments}>
        Комментарии <ArrowRightIcon />
      </h3>
      <CommentItem/>
    </div>
  );
};
