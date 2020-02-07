import mongoose, {Schema, Types} from "mongoose";

const PostSchema = mongoose.Schema({
        user: {
            type: Types.ObjectId,
            required: true,
            ref: 'User' 
        },
        title: {
            type: String,
        },
        content : {
            videoUrl: String,
            lyrics: String,

        }
});