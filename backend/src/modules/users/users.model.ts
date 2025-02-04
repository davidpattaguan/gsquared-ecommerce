import { User } from "../../types";

const users: User[] = [];

export const createUser = (email: string, password: string): User => {
  const newUser = { email, password };
  users.push(newUser);
  return newUser;
};

export const getUserByEmail = (email: string): User | undefined => {
  return users.find((user) => user.email === email);
};
