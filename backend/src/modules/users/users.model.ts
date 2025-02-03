import { User } from "../../types";

const users: User[] = [];

export const createUser = (username: string, password: string): User => {
  const newUser = { username, password };
  users.push(newUser);
  return newUser;
};

export const getUserByUsername = (username: string): User | undefined => {
  return users.find((user) => user.username === username);
};
