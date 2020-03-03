import {gql}  from'apollo-server-express';

export default gql`
    extend type Query {
        getMyWrittenComposition(composer: ID!): [WrittenComposition]
    }
    extend type Mutation {
        addWrittenComp(file: Upload!, writtenInput: WrittenCompInput): File!
    }

    type WrittenComposition {
        id: ID
        title: String
        composer: ID!
        category: ID!
        price: Float!
        isPublish: Boolean!
        views: Int!
    }

    type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

    input WrittenCompInput {
        userId: ID!
        title: String
        price: Float!
        isPublish: Boolean!
        category: ID!
    }
`