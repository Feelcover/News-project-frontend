import { Button, TextField } from "@material-ui/core";
import React from "react";
import styles from "../Auth.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormValidation } from "../../../utils/validations/loginValidation";

interface LoginFormProps {
  backTo: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ backTo }) => {
  const { handleSubmit, register, formState } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(LoginFormValidation),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("email")}
          error={!!formState.errors.email?.message}
          helperText={formState.errors.email?.message}
          className="mb-20"
          name="email"
          size="small"
          label="Почта"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          {...register("password")}
          helperText={formState.errors.password?.message}
          error={!!formState.errors.password?.message}
          className="mb-20"
          name="password"
          size="small"
          label="Пароль"
          type="password"
          variant="outlined"
          fullWidth
          required
        />

        <div className={styles.mailButtonWrapper}>
          <Button color="primary" variant="contained" type="submit">
            Войти
          </Button>
          <p onClick={backTo}> &lt; Назад</p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
