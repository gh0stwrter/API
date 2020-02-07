import mongoose from "mongoose";
 
const CategoriesSchema = mongoose.Types.Schema({
    name: {type:String , unique: true},
   subCategories: [{
       name: {type:String , unique: true}
   }], 

});
export default mongoose.model("Categories", CategoriesSchema);
