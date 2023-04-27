import React from 'react';
import { Paper, Button, IconButton, Avatar, List, ListItem } from '@material-ui/core';
import {
  Search as SearchIcon,
  BorderColor as CreateIcon,
  SmsOutlined as MessageIcon,
  NotificationsNone as NotificationIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <Paper classes={{ root: styles.paper }}>
        <div className={styles.headerLeft}>
          <IconButton><MenuIcon/></IconButton>
          <a className={styles.logoContainer}>
            <img className={styles.logo} src="/static/img/logo.png" alt="Logo" />
          </a>
          <div className={styles.searchContainer}>
            <SearchIcon />
            <input placeholder="Поиск" />
          </div>
          <Button className={styles.createButton} variant="contained">
            <CreateIcon />
          </Button>
        </div>
        <div className={styles.headerRight}>
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
