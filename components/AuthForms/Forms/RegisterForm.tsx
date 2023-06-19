import { Button, TextField } from "@material-ui/core";
import React from "react";
import styles from "../Auth.module.scss";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFormValidation } from "../../../utils/validations/registerValidation";
import FormField from "../FormField/FormField";

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
          <FormField name="name" label="ФИО" required={true} />
          <FormField name="email" label="Почта" required={true} />
          <FormField name="password" label="Пароль" required={true} />
          <div className={styles.mailButtonWrapper}>
            <Button disabled={!form.formState.isValid} color="primary" variant="contained" type="submit">
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
