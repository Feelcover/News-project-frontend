import * as yup from "yup";

export const RegisterFormValidation = yup.object().shape({
  name: yup.string().min(2, "Не менее 2 символов").required("Введите ФИО"),
  email: yup.string().email("Неверный формат почты").required("Введите почту"),
  password: yup
    .string()
    .min(6, "Не менее 5 символов")
    .required("Введите пароль"),
});
