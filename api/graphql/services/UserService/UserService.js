import UserModel from "../../../models/User";
import { AuthLogin } from "./AuthService";

export const addUser = async data => {
  const user = new UserModel(data);
  await user.save();
  return userLogin;
};

export const userLogin = data => {
  return AuthLogin(data.email, data.password);
};

export const getUsers = data => {
  return UserModel.find().then(user => {
    return user;
  });
};
