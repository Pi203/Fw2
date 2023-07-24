import { User } from "../interfaces/auth.type";
import config from "./config";
export const getAllUser = () => {
    return config.get('/users');
}
export const Signin = (user: User) => {
    return config.post('/signin', user);
}
export const Signup = (user: User) => {
    return config.post('/signup', user);
}
