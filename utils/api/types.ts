export type LoginUser = {
    email: string;
    password: string;
}

export type RegisterUser = {
    fullName: string;
} & LoginUser;