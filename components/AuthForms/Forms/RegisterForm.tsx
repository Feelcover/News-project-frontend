import { Button, TextField } from "@material-ui/core";
import React from "react";
import styles from "../Auth.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFormValidation } from "../../../utils/validations/registerValidation";

interface RegisterFormProps {
  backTo: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ backTo }) => {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(RegisterFormValidation),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("name")}
          error={!!formState.errors.name?.message}
          helperText={formState.errors.name?.message}
          name="name"
          className="mb-20"
          size="small"
          label="ФИО"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          {...register("email")}
          error={!!formState.errors.email?.message}
          helperText={formState.errors.email?.message}
          name="email"
          className="mb-20"
          size="small"
          label="Почта"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          {...register("password")}
          error={!!formState.errors.password?.message}
          helperText={formState.errors.password?.message}
          name="password"
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
          <Button color="primary" variant="text" onClick={backTo}>
            Вход
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
