import { Button, TextField } from "@material-ui/core";
import React from "react";
import styles from "../Auth.module.scss";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFormValidation } from "../../../utils/validations/registerValidation";

interface RegisterFormProps {
  backTo: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ backTo }) => {
  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(RegisterFormValidation),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <TextField
          {...form.register("name")}
          error={!!form.formState.errors.name?.message}
          helperText={form.formState.errors.name?.message}
          name="name"
          className="mb-20"
          size="small"
          label="ФИО"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          {...form.register("email")}
          error={!!form.formState.errors.email?.message}
          helperText={form.formState.errors.email?.message}
          name="email"
          className="mb-20"
          size="small"
          label="Почта"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          {...form.register("password")}
          error={!!form.formState.errors.password?.message}
          helperText={form.formState.errors.password?.message}
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
      </FormProvider>

    </div>
  );
};

export default RegisterForm;
