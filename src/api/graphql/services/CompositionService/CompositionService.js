import WrittenCompostionModel from "../../../models/Compisition/WrittenCompose";
import SonoreCompositionModel from "../../../models/Compisition/SonoreCompose";
import UserModel from "../../../models/User";
import User from "../../../models/User";
import { createWriteStream, createReadStream } from "fs";
import path from "path";

export const addSonore = async data => {
    const compostion = new SonoreCompositionModel(data);
    await compostion.save();
  };


export const createWrittenComposition = async ( { file, writtenInput:{title, userId, price, isPublish, category}}) => {
  const files = [];
if(file)console.log(file)
  return file.then(file =>{
    const {createReadStream, filename, mimetype } = file;
    const fileStream = createReadStream()

        fileStream.pipe(createWriteStream(`./composition/${filename}`))

        return file;
  })

  // if(file){
  //      await new Promise(res => {
  //         createReadStream()
  //         .pipe(createWriteStream(path.join("./compositions", file.path)))
  //       })
  //       .on('close', res)
  //         files.push(file.path[0])
  //     }    


// try {
//       const existingUser = await User.findById(userId);
//         existingUser && title && content && userId && price && isPublish && category ? 
//        await  WrittenCompostionModel.create({
//           composer: userId,
//            title, 
//            price, 
//            isPublish, 
//            category,
//            file: file.path,

//         }).then(res => {
//           console.log( res)
//         }) 
//         : "Il manque certaines informations veuillez verifier."
// }catch(err){
//   throw err
// }
//       return true;

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


