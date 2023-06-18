import * as yup from "yup";

export const LoginFormValidation = yup.object().shape({
  email: yup.string().email("Неверный формат почты").required("Введите почту"),
  password: yup
    .string()
    .min(6, "Не менее 5 символов")
    .required("Введите пароль"),
});
