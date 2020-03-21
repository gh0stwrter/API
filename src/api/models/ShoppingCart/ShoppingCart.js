import mongoose from "mongoose";
 
const ShoppingCart = mongoose.Schema({
        customer:{
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        poducts: [{
           type: Schema.Types.ObjectId,
            ref: "Composition"
        }],
        saled: {
            type: Boolean, 
            default: false,
        },
});
export default mongoose.model("ShoppingCart", ShoppingCart);
