import axios from "axios";
import { LoginUser, RegisterUser, ResponseUser } from "./types";

const instance = axios.create({
  baseURL: "http://localhost:3001",
});

export const UserApi = {
  async register(registerUser: RegisterUser) {
    const { data } = await instance.post<RegisterUser, { data: ResponseUser }>(
      "auth/register",
      registerUser
    );
    return data;
  },

  async login(loginUser: LoginUser) {
    const { data } = await instance.post<LoginUser, { data: ResponseUser }>(
      "auth/login",
      loginUser
    );
    return data;
  },
};
