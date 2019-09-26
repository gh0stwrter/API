import {
    addUser, 
    userLogin, 
    getUsers,
    deleteAccount
} from "../services/UserService/UserService";

export default {
    Query: {
        getUsers: () => {
            return getUsers();
        },
        login:  (_, data)  => {
            return  userLogin(data);
        }
    },
    Mutation: {
        newUser: async (_, data)=> {
            return await  addUser(data);
        },
        deleteAccount: async (_, data)=> {
            return await  deleteAccount(data);
        }
    }
}