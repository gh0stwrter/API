import {gql}  from'apollo-server-express';


export default gql`

type File {
    filename: String!
    mimetype: String!
    encoding: String!
}
extend type Query {
    uploads: [SonoreComposition]
  }

  extend type Mutation {
    singleUpload(sonoreInput: SonoreCompositionInput ,file: Upload!): SonoreComposition!
  }

type SonoreComposition {
    _id: ID!
    composer: ID!
    title: String
    price: Float
    category: ID!
    content: File!
}
input SonoreCompositionInput {
    composer: ID!
    title: String
    price: Float
    category: ID!
}
`