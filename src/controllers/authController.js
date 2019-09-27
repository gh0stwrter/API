import UserService from "../api/graphql/services/UserService/UserService";

export default {
    signIn: async (_, { email, password }) => {
        try {
            return await UserService.userLogin({email, password})
        } catch (err) {
            console.error(err);
        }
    }
}