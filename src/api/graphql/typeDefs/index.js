import { gql } from 'apollo-server-express';

import userSchema from './user';
import writtenCompSchema from "./writtenCompostion"
import sonoreCompSchema from "./sonoreComposition";
import categories from "./categories";

const rootSchema = gql`

    scalar JSON
    scalar Date
    scalar Upload

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
    categories,
    writtenCompSchema,
    sonoreCompSchema,
];