import axios from "axios";
import { RegisterUser } from "./types";

const instance = axios.create({
  baseURL: "http://localhost:3001",
});

export const UserApi = {
  async register(registerUser: RegisterUser) {
    const data = await instance.post("auth/register");
  },
};
