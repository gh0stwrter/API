import userResolver from "./user";
import compositionResolver from "./writtenComposition";
import sonoreCompResolver from "./sonoreCompostion";
import {GraphQLUpload} from "apollo-server-express";

export default [
   {Upload: GraphQLUpload},
    compositionResolver,
    sonoreCompResolver,
    userResolver,
]