import {createWrittenComposition, getAllWrittenCompisitionByUserId} from "../services/CompositionService/CompositionService";
 
export default {
    Query: {
        getMyWrittenComposition: (_,  composer )=>{
           return getAllWrittenCompisitionByUserId(composer)
        }
    },
    Mutation:{
        addWrittenComp:  (_, { writtenInput }) => {
            return createWrittenComposition(writtenInput)
            },
            
    },

}