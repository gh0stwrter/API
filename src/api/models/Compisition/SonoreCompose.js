import mongoose, {Schema} from "mongoose";


const SonnoreComposeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
   
    composer: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "user"
    },

    price: {
        type: Number,
        min: 0,
    },

    category:{
        type: Schema.Types.ObjectId,
            required: true,
            ref: "Categories",
    },
    droit: {
        type: String,
        required: true,
    },
    
    isPublished: {
        type: Boolean, 
        default: false,
    },
    
    views: {
        type: Number,
    }

});

export default mongoose.model("SonoreCompose", SonnoreComposeSchema);
