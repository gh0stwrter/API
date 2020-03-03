import mongoose, {Schema} from "mongoose";


const WrittenComposeSchema = mongoose.Schema({
    
    title: {
        type: String,
        required: true,
    },

    file: String,
   
    composer: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },


    category:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Categories"
    },

    price: {
        type: Number,
        min: 0,
    },

    isPublish: {
        type: Boolean, 
        default: false,
    },

    views: {
        type: Number,
    }

});

export default mongoose.model("WrittenCompose", WrittenComposeSchema);

