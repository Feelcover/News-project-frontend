import React from "react";
import Link from "next/link";
import {
  Paper,
  Button,
  IconButton,
} from "@material-ui/core";
import {
  SearchOutlined as SearchIcon,
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  NotificationsNoneOutlined as NotificationIcon,
  AccountCircleOutlined as UserIcon
} from "@material-ui/icons";

import styles from "./Header.module.scss";
import { AuthForm } from "../AuthForms";

export const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link href="/">
          <a>
            <img
              height={35}
              className="mr-20"
              src="/static/img/logo.svg"
              alt="Logo"
            />
          </a>
        </Link>

        <div className={styles.searchBlock}>
          <SearchIcon />
          <input placeholder="Поиск" />
        </div>
      </div>
      <Link href="/write">
        <a>
          <Button variant="contained" className={styles.penButton}>
            Новая запись
          </Button>
        </a>
      </Link>
      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        {/* <Link href="/profile/1">
          <a className="d-flex align-center">
            <Avatar
              className={styles.avatar}
              alt="Remy Sharp"
              src="https://i.playground.ru/e/RwI1VTZpbZS9M9_4BRvDZg.jpeg?1200x1200"
            />
            <ArrowBottom />
          </a>
        </Link> */}
        <div className={styles.loginButton} onClick={handleClickOpen}>
          <UserIcon/>
          Войти
        </div>
      </div>
    <AuthForm isOpen={open} onClose={handleClose}/>
    </Paper>
  );
};
