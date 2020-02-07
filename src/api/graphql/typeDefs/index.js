import { gql } from 'apollo-server-express';

import userSchema from './user';


const rootSchema = gql`

    scalar JSON
    scalar Date

    type Query {
        _: Boolean
    }
    type Mutation {
        _: Boolean
    }
    type Subscription {
        _: Boolean
    }
`;

export default [
    rootSchema,
    userSchema,
];