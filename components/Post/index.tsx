import { Paper, Typography } from '@material-ui/core'
import React from 'react'

export const Post = () => {
  return (
    <Paper elevation={0} className="p-20">
            <Typography variant="h5">
              Успеть добежать до Белоруссии. Кто такая Елена Блиновская и почему провалился ее новый марафон
            </Typography>
            <Typography>
              Утром 27 апреля по подозрению в уклонении от уплаты налогов задержали блогера Елену Блиновскую. По версии
              следствия, она не донесла до казны налогов почти на миллиард.
            </Typography>
            <img
            src="https://cdn.iportal.ru/preview/news/articles/831aca9e3e7528c1c61246a3986e9b2704e8a158_727.jpg.webp-portal"
            alt="фото"
          />
          </Paper>
  )
}
