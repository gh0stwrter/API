import {gql}  from'apollo-server-express';

export default gql`

    extend type Query {
        login(email: String, password: String): Token
        getUsers: [User]
        me(_id: ID!):User!
    }

    extend type Mutation {
        newUser(email: String, username: String, password: String): Token
        deleteAccount(token: String): String
        followUser(following: ID, follower: ID): User
    }

    type Following {
        _id: ID
        user: ID
    }
    type Follower {
        _id: ID
        user: ID
    }


    type User {
            _id: ID!
            email:String
            password:String
            username: String!
            followings: Int! 
            followers:  Int!
            role: String
        }
        
        type Token {
            token: String!
        }`
        ;