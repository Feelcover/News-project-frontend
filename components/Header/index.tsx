import React from "react";
import { Paper, Button, IconButton, Avatar, List, ListItem } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import CreateIcon from "@mui/icons-material/BorderColor";
import MessageIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationIcon from '@mui/icons-material/NotificationsNone';
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <Paper classes={{root:styles.paper}}>
      <div>
        <a>
          <img
            height={35}
            className="mr-20"
            src="/static/img/logo.jpg"
            alt="Logo"
          />
        </a>
        <div className={styles.searchContainer}>
          <SearchIcon />
          <input placeholder="Поиск" />
        </div>
        <Button>
          <CreateIcon />
        </Button>
      </div>
      <div>
      <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        <Avatar
                className={styles.avatar}
                alt="Remy Sharp"
                src="https://i.playground.ru/p/vOQQQO7dUl7oVvbUNJlDJQ.png?255x255"
              />
      </div>
    </Paper>
  );
};
