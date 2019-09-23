import UserModel from '../../../models/User';
import {AuthLogin} from './AuthService';
import jwt from "jsonwebtoken";

export const addUser = async (data) => {
    const user = new UserModel(data);
    await user.save();
    return userLogin;
};

export const userLogin = (data) => {
    const password = data.password;
    const email = data.email;
   return   AuthLogin(email, password);
};