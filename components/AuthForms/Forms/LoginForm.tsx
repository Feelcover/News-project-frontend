import { Button, TextField } from "@material-ui/core";
import React from "react";
import styles from "../Auth.module.scss";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormValidation } from "../../../utils/validations/loginValidation";
import FormField from "../FormField/FormField";

interface LoginFormProps {
  backTo: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ backTo }) => {
  const form = useForm({
    mode: "onSubmit",
    resolver: yupResolver(LoginFormValidation),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
      <FormField name="email" label="Почта" required={true} />
      <FormField name="password" label="Пароль" required={true} />
        <div className={styles.mailButtonWrapper}>
          <Button disabled={!form.formState.isValid} color="primary" variant="contained" type="submit">
            Войти
          </Button>
          <p onClick={backTo}> &lt; Назад</p>
        </div>
      </form>
      </FormProvider>
    </div>
  );
};

export default LoginForm;
