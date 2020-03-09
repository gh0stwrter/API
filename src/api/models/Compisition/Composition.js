import mongoose, {Schema} from "mongoose";


const CompositionSchema = mongoose.Schema({
    
    title: {
        type: String,
        required: true,
    },
    compo_type: {
        type: String,
        required: true,
        enum: ['written', 'sonore'],
      },

    file: String,
    image: String,
    
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

export default mongoose.model("Composition", CompositionSchema);

