import { Button } from "@material-ui/core";
import React from "react";
import styles from "../Auth.module.scss";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFormValidation } from "../../../utils/validations/registerValidation";
import FormField from "../FormField/FormField";
import { UserApi } from "../../../utils/api";
import { RegisterUser } from "../../../utils/api/types";
import { setCookie } from "nookies";
import Alert from '@material-ui/lab/Alert';


interface RegisterFormProps {
  backTo: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ backTo }) => {
  const [errorMessage, setErrorMessage] = React.useState('');

  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(RegisterFormValidation),
  });

  const onSubmit = async (registerUser: RegisterUser) => {
    try {
      const data = await UserApi.register(registerUser);
      console.log(data);
      setCookie(null, "authToken", data.access_token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      setErrorMessage('');
    } catch (err) {
      if (err.response) {
        setErrorMessage(err.response.data.message);
      }
      console.warn("Ошибка при регистрации", err);
    }
  };

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name="fullName" label="ФИО" required={true} />
          <FormField name="email" label="Почта" required={true} />
          <FormField name="password" label="Пароль" required={true} />
          {errorMessage && (
            <Alert severity="error" className="mb-20">
              {errorMessage}
            </Alert>
          )}
          <div className={styles.mailButtonWrapper}>
            <Button
              disabled={!form.formState.isValid || form.formState.isSubmitting}
              color="primary"
              variant="contained"
              type="submit"
            >
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
