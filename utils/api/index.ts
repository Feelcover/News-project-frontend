import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3001"
});

export const UserApi = {
    async register(dto:) {
        const data = await instance.post('auth/register')
    }
}