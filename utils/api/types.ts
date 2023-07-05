export type LoginUser = {
  email: string;
  password: string;
};

export type RegisterUser = {
  fullName: string;
} & LoginUser;

export type ResponseUser = {
    createdAt: string;
    updatedAt: string;
    email: string;
    fullName: string;
    id: number;
    access_token: string;
}
