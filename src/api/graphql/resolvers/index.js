import userResolver from "./user";
import compositionResolver from "./writtenComposition";
import sonoreCompResolver from "./sonoreCompostion";
import {GraphQLUpload} from "apollo-server-express";
import categoriesResolver from "./categories";
export default [
   {Upload: GraphQLUpload},
    compositionResolver,
    sonoreCompResolver,
    categoriesResolver,
    userResolver,
]
