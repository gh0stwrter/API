import WrittenCompostionModel from "../../../models/Compisition/WrittenCompose";
import SonoreCompositionModel from "../../../models/Compisition/SonoreCompose";



export const addSonore = async data => {
    const compostion = new SonoreCompositionModel(data);
    await compostion.save();
  };



export const createWrittenComposition = async data => {
  const composition = new WrittenCompostionModel(data)
  await composition.save();
}


{/* USER COMPOSITION RELATION */}

export const getAllSonorCompisitionByUserId = (data) => {
    const res =   SonoreCompositionModel.find(data)
      .populate('composer');

      console.log(res)
    };


export const getAllWrittenCompisitionByUserId = (data) => {
 const res =  WrittenCompositionModel.find(data)
  .populate('user');
  console.log(res)
};

{/* COMPOSITION RELATION FINISH */}


