import { Button } from '@material-ui/core';
import {
  SmsOutlined as MessageIcon,
  FormatListBulleted as ListIcon,
  WhatshotTwoTone as LentaIcon,
  StarHalf as RatingIcon
} from '@mui/icons-material';
import React from 'react';
import styles from './MenuSideBar.module.scss';

export const LeftSideBar = () => {
  return (
    <div className={styles.MenuSideBar}>
      <ul className={styles.menu}>
        <li>
          <Button>
            <LentaIcon />
            <p className={styles.menuItems}>Лента</p>
          </Button>
        </li>
        <li>
          <Button>
            <MessageIcon />
            <p className={styles.menuItems}>Сообщения</p>
          </Button>
        </li>
        <li>
          <Button>
            <RatingIcon />
            <p className={styles.menuItems}>Рейтинг</p>
          </Button>
        </li>
        <li>
          <Button>
            <ListIcon />
            <p className={styles.menuItems}>Подписки</p>
          </Button>
        </li>
      </ul>
    </div>
  );
};
