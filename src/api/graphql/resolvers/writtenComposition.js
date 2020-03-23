import {createWrittenComposition, streamFile,getAllCompisition,getAllWrittenCompisitionByUserId} from "../services/CompositionService/CompositionService";
 
export default {
    Query: {
        getCompositions: async (_,data) =>{
            return await getAllCompisition();
        },
        getMyWrittenComposition: (_,  composer )=>{
           return getAllWrittenCompisitionByUserId(composer)
        },
        streamMusic: (_, data) =>{
            console.log(data)
                return streamFile(data)
        }
    },
    Mutation:{
        addWrittenComp:  (_,data) => {
            return createWrittenComposition(data)
            },
            
    },

}