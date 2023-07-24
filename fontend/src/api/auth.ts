

import { User } from "../interfaces/auth.type";
import { TResSuccess } from "../interfaces/common.type";
import instance from "./config";

export const login = (data: { email: string; password: string }) =>
  instance.post<TResSuccess<{ accessToken: string; user: User }>>(
    "/signin",
    data
  );

export const register = (data: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}) => instance.post<TResSuccess<User>>("/signup", data);