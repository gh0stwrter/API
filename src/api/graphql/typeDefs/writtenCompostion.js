import {gql}  from'apollo-server-express';

export default gql`
    extend type Query {
        getMyWrittenComposition(composer: ID!): [WrittenComposition]
    }
    extend type Mutation {
        addWrittenComp(writtenInput: WrittenCompInput): String
    }

    type WrittenComposition {
        id: ID
        title: String
        content: [Content]
        composer: ID!
        category: ID!
        price: Float
        isPublish: Boolean
        views: Int
    }

    type Content {
        intro: String
        couplet: String
        refrain: String
    }

    input ContentInput {
        intro: String
        couplet: String
        refrain: String
    }

    input WrittenCompInput {
        userId: ID!
        title: String
        content: [ContentInput]
        price: Float
        isPublish: Boolean
        category: ID
    }
`