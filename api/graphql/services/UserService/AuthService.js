import UserModel from '../../../models/User';
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";


export const AuthLogin = async (email, password) => {
        let token = "";
        const User = await UserModel.findOne({email},  (err, user) =>{
            if(!user){
                return ({message: 'User not Found'});
            }
            const validate =  user.isValidatePassword(password, user);
            // const validate = await bcrypt.compare(password, user.password);
            if(!validate) {
                return ({message: 'Wrong Password'});
            }
            const body = {_id: user._id, username: user.username};
            token  = jwt.sign({user: body}, 'top_secret');
        });
         return  token;
};