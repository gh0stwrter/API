import {
    AuthenticationError
} from 'apollo-server-express';
import jwt from "jsonwebtoken";
export const getMe = async req => {
    const token = req.headers['authorization'];
    if (token){
        try {
            return await jwt.verify(token.replace("Bearer ", ""), process.env.SECRET);
        } catch (err) {
            throw new AuthenticationError('Your Session Expired. Please Sign In Again');
        }
    }
};