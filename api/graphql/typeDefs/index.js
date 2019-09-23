import {gql}  from'apollo-server-express';

export default gql`
    type User {
        email:String,
        password:String,
        username: String
    }
    
    type Token {
        token: String!
    }

    type Query {
        getUsers :[User],
    }
    
    type Mutation {
        newUser(email: String, username: String, password: String): User
        login(email: String, password: String): Token
    }`;