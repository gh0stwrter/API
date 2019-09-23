import UserModel from '../../../models/User';
import jwt from 'jsonwebtoken';

export const AuthLogin = async (email, password) => {
        const User = await UserModel.findOne({email}, async (err, user) =>{
            if(!user){
                return ({message: 'User not Found'});
            }
            console.log(password)
            const validate = await user.isValidatePassword(password);
            if(!validate) {
                return ({message: 'Wrong Password'});
            }
            const body = {_id: user._id, username: user.username};
            return  jwt.sign({user: body}, 'top_secret');
        });
    return User;
};





