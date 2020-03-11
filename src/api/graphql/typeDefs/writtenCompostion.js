import {gql}  from'apollo-server-express';

export default gql`
    extend type Query {
        getMyWrittenComposition(composer: ID!): [WrittenComposition]
        getCompositions: [WrittenComposition]
        streamMusic(composer: ID, file: String!, _id: ID): String!
    }
    extend type Mutation {
        addWrittenComp(file: [Upload!], writtenInput: WrittenCompInput): File
    }

    type WrittenComposition {
        id: ID
        compo_type: String
        title: String
        file: String,
        composer: ID!
        category: ID!
        price: Float!
        isPublish: Boolean!
        views: Int
        image: String
    }

    type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

    input WrittenCompInput {
        userId: ID!
        title: String
        compo_type: String!
        price: Float!
        isPublish: Boolean!
        category: ID!
    }
`