import CategorieModel from "../../../models/Categories";
export const getAllCategories = async () =>{
        return await CategorieModel.find();
}