import {addUser, userLogin} from "../services/UserService/UserService";

export default {
    Query: {
        getUsers:() => {
            console.log('ok');
        },
        login: async(_, data) => {
            return await userLogin(data);
        }
    },
    Mutation: {
            newUser: async(_, data)=> {
                     return await addUser(data)
                     },

            },

}