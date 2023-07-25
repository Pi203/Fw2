import { User } from "../interfaces/auth.type";
import config from "./config";
import { TResSuccess } from "../interfaces/common.type";
import instance from "./config";

export const getAllUser = () => {
    return config.get('/users');
}
export const Signup = (user: User) => {
    return config.post('/signup', user);
}
export const login = (data: { email: string; password: string }) =>
  instance.post<TResSuccess<{ accessToken: string; user: User }>>(
    "/signin",
    data
  );