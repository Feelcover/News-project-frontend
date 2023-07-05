import axios from "axios";
import { LoginUser, RegisterUser, ResRegisterUser } from "./types";

const instance = axios.create({
  baseURL: "http://localhost:3001",
});

export const UserApi = {
  async register(registerUser: RegisterUser): Promise<ResRegisterUser> {
    const { data } = await instance.post("auth/register", registerUser);
    return data;
  },

  async login(loginUser: LoginUser) {
    const { data } = await instance.post("auth/login", loginUser);
    return data;
  },
};
