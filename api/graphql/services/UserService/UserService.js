import UserModel from "../../../models/User";
import { AuthLogin } from "./AuthService";
import {dataUser} from "./utilities";

export const addUser = async data => {
  const user = new UserModel(data);
  console.log(user)
  await user.save();
  return userLogin(user);
};

export const userLogin = data => {
  return AuthLogin(data.email, data.password);
};

export const getUsers = data => {
  return UserModel.find()
  .then(user => {
    return user;
  });
};

export const getUser = token => {
  return UserModel.findOne()
    .then(data => {
      return data
    });
};

export const deleteAccount = async (token) => {
  const id = dataUser(token)._id;
  let message = "Une erreur est survenu";
  if(id) {
    UserModel.remove({ _id: id }, function(err) {
      if (!err) {
              message = "Votre compte a bien été supprimer .";
      } else {
              console.error(err);
      }
  });
}
  return message;
};
