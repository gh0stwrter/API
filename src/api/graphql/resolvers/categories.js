import {getAllCategories} from "../services/CategoriesService/CategoriesService";
export default {
    Query:{
        getCategories: () =>{
           return getAllCategories()
        }
    }
}