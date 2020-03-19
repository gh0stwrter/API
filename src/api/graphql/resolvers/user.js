import {
    addUser, 
    userLogin, 
    getUsers,
    deleteAccount,
    following
} from "../services/UserService/UserService";

export default {
    Query: {
        getUsers: () => {
            return getUsers();
        },
        
        me: (_,data) =>{

        }
    },
    Mutation: {
        newUser: async (_, data)=> {
            return await  addUser(data);
        },
        login:  (_, data)  => {
            console.log(data)
            return  userLogin(data);
        },
        deleteAccount: async (_, data)=> {
            return await  deleteAccount(data);
        },
        followUser: (_, data) =>{
            
            return  following(data)
        }
    }
}