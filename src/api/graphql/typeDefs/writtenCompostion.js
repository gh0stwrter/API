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
        username: String
        _id: ID!
        title: String
        compo_type: String
        category: ID
        file: String,
        price: Float
        isPublish: Boolean
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