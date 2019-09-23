import UserModel from "../../../models/User";
import jwt from "jsonwebtoken";

export const AuthLogin = async (email, password) => {
  return await UserModel.findOne({ email }, (err, user) => {
// User is valide (a remplacer par un midleware)
    if (!user) return { message: "User not Found" };
    if (!user.isValidatePassword(password, user))
      return { message: "Wrong Password" };
  })
// -----
  .then(user => {
    const body = { _id: user._id, username: user.username };
    return { token: jwt.sign({ user: body }, "top_secret") };
  });
};
