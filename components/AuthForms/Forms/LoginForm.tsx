import { Button, TextField } from '@material-ui/core'
import React from 'react'
import styles from '../Auth.module.scss'
import {useForm} from 'react-hook-form'

interface LoginFormProps {
  backTo:() => void;
}

const LoginForm: React.FC<LoginFormProps> = ({backTo}) => {

  const form = useForm();

  return (
    <div>
    <form>
      <TextField
        className="mb-20"
        size="small"
        label="Почта"
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        className="mb-20"
        size="small"
        label="Пароль"
        type="password"
        variant="outlined"
        fullWidth
        required
      />

      <div className={styles.mailButtonWrapper}>
        <Button color="primary" variant="contained">
          Войти
        </Button>
        <p onClick={backTo}> &lt; Назад</p>
      </div>
    </form>
  </div>
  )
}

export default LoginForm