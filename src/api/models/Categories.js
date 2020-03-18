import mongoose from "mongoose";
 
const CategoriesSchema = mongoose.Schema({
    name: {type:String , unique: true},
   
});
export default mongoose.model("Categories", CategoriesSchema);
