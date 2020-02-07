import {gql}  from'apollo-server-express';

export default gql`
    extend type Query {

    }

    extend type Mutation {

    }

    type Content {
        couplet: String
        refrain: String
    }

    type WrittenComposition {
        id: ID
        title: String
        content: [Content]
        composer: ID
        category: ID
        price: Int
        isPublish: Boolean
        views: Int
    }
`