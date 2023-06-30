import * as yup from "yup";

export const RegisterFormValidation = yup.object().shape({
  fullName: yup.string().min(2, "Не менее 2 символов").required("Введите ФИО"),
  email: yup.string().email("Неверный формат почты").required("Введите почту"),
  password: yup
    .string()
    .min(5, "Не менее 5 символов")
    .required("Введите пароль"),
});
