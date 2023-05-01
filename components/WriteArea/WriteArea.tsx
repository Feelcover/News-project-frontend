import { TextField } from '@material-ui/core'
import React, { FC } from 'react'
import styles from "./WriteArea.module.scss"

interface IWriteArea {
    title?: string;
}

const WriteArea: FC<IWriteArea> = ({title}) => {
  return (
    <div>
    <TextField classes={{root:styles.textField}} placeholder='Заголовок' defaultValue={title}></TextField>
    </div>
  )
}

export default WriteArea