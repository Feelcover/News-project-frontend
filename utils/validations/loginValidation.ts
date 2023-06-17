import * as yup from "yup";

const LoginSchema = yup.object().shape({
    email: yup.string().email('Неверный формат почты').required('Введите почту'),
    password: yup.string().min(6, 'Не короче 6 символов').required('Введите пароль'),
});