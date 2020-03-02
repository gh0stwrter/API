import WrittenCompostionModel from "../../../models/Compisition/WrittenCompose";
import SonoreCompositionModel from "../../../models/Compisition/SonoreCompose";
import UserModel from "../../../models/User";
import User from "../../../models/User";


export const addSonore = async data => {
    const compostion = new SonoreCompositionModel(data);
    await compostion.save();
  };



export const createWrittenComposition = async ({title, content, userId, price, isPublish, category}) => {
  try {
      const existingUser = await User.findById(userId);
        existingUser && title && content && userId && price && isPublish && category ? 
       await  WrittenCompostionModel.create({
          composer: userId,
           title, 
           content, 
           price, 
           isPublish, 
           category,

        }).then(res => {
          console.log( res)
        }) 
        : "Il manque certaines informations veuillez verifier."
}catch(err){
  throw err
}
}

{/* USER COMPOSITION RELATION */}

export const getAllSonorCompisitionByUserId = (data) => {
    const res =   SonoreCompositionModel.find(data)
      .populate('composer');

      console.log(res)
    };


export const getAllWrittenCompisitionByUserId = async  (data) => {
   return WrittenCompostionModel.find(data)
  .populate('user')
  
};

{/* COMPOSITION RELATION FINISH */}


