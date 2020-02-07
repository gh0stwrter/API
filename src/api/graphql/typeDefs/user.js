import {gql}  from'apollo-server-express';

export default gql`
    extend type Query {
        login(email: String, password: String): Token,
        getUsers: [User]
    }

    extend type Mutation {
        newUser(email: String, username: String, password: String): Token
        deleteAccount(token: String): String
        followUser(following: String, follower: String): User
    }
    type Following {
        id: ID
        user: ID
    }
    type Follower {
        id: ID
        user: ID
    }
    type User {
            id: ID
            email:String
            password:String
            username: String
            following: [Following]
            followers: [Follower]
        }
        
        type Token {
            token: String!
        }`
        ;