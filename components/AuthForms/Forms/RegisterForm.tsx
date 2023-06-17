import { Button, TextField } from '@material-ui/core'
import React from 'react'
import styles from '../Auth.module.scss'

interface RegisterFormProps {
  backTo:() => void;
}

const RegisterForm:React.FC<RegisterFormProps> = ({backTo}) => {
  return (
    <div>
    <form>
    <TextField
        className="mb-20"
        size="small"
        label="ФИО"
        variant="outlined"
        fullWidth
        required
      />
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
          Зарегистрироваться
        </Button>
        <p onClick={backTo}> &lt; Назад</p>
      </div>
    </form>
  </div>
  )
}

export default RegisterForm