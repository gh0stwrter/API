import jwt from "jsonwebtoken";

export const dataUser = ({token}) => {
        const decode = jwt.decode(token);
        console.log(decode)
        if (decode != null)
            return decode.user
        return false
}