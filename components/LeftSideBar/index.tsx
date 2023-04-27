import { Button } from '@material-ui/core'
import WhatshotTwoToneIcon from "@mui/icons-material/WhatshotTwoTone";
import React from 'react'
import styles from './LeftSideBar.module.scss';

export const LeftSideBar = () => {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Button>
            <WhatshotTwoToneIcon/>
            Лента</Button>
        </li>
      </ul>

    </div>
  )
}
