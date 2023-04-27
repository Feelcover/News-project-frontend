import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import styles from './Post.module.scss';

export const Post = () => {
  return (
    <Paper elevation={0} classes={{ root: styles.paper }}>
            <Typography variant="h5" className={styles.title}>
              Успеть добежать до Белоруссии. Кто такая Елена Блиновская и почему провалился ее новый марафон
            </Typography>
            <Typography className={styles.text}>
              Утром 27 апреля по подозрению в уклонении от уплаты налогов задержали блогера Елену Блиновскую. По версии
              следствия, она не донесла до казны налогов почти на миллиард.
            </Typography>
            <img
            src="https://cdn.iportal.ru/preview/news/articles/831aca9e3e7528c1c61246a3986e9b2704e8a158_727.jpg.webp-portal"
            alt="фото"
            height={500}
            width={600}
          />
          </Paper>
  )
}
