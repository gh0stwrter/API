export default {
    Query:{
        uploads:(_, data) =>{
            console.log(data)
        }
    },
    Mutation:{
        singleUpload: (_, data) =>{
            console.log(data)
        }
        
    }
}