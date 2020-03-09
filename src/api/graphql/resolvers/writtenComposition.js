import {createWrittenComposition, streamFile,getAllCompisition,getAllWrittenCompisitionByUserId} from "../services/CompositionService/CompositionService";
 
export default {
    Query: {
        getCompositions: (_,data) =>{
            return getAllCompisition();
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