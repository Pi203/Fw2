import { User } from "../interfaces/auth.type";

export const setProfileToLS = (data: { accessToken: string; user: User }) => {
  localStorage.setItem("profile", JSON.stringify(data));
};

export const getProfileFromLS: () => {
  accessToken: string;
  user: User;
} = () => {
  const profile = localStorage.getItem("profile");
  return profile ? JSON.parse(profile) : null;
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
