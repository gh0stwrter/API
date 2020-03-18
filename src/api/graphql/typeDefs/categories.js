import {gql}  from'apollo-server-express';

export default gql`
    extend type Query {
        getCategories: [Categories]
    }
    type Categories {
        _id: ID
        name: String
    }
`