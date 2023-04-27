import { Button } from '@material-ui/core';
import WhatshotTwoToneIcon from '@mui/icons-material/WhatshotTwoTone';
import {
  Search as SearchIcon,
  BorderColor as CreateIcon,
  SmsOutlined as MessageIcon,
  NotificationsNone as NotificationIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import React from 'react';
import styles from './LeftSideBar.module.scss';

export const LeftSideBar = () => {
  return (
    <div className={styles.LeftSideBar}>
      <ul className={styles.menu}>
        <li>
          <Button>
            <WhatshotTwoToneIcon />
            <p className={styles.menuItems}>Лента</p>
            
          </Button>
        </li>
        <li>
          <Button>
            <MenuIcon />
            <p className={styles.menuItems}>Сообщения</p>
          </Button>
        </li>
      </ul>
    </div>
  );
};
