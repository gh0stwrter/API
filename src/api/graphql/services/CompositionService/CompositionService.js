import CompositionModel from "../../../models/Compisition/Composition";
import User from "../../../models/User";
import {uploadToDirectory, streamMusicFromCloud} from "../_utils/fileManagement";
import path from "path";
import { createWriteStream, createReadStream ,existsSync} from "fs";

const insertComposition = async (filename,imageName,{ title, userId, price, compo_type, isPublish, category}) =>{

  return await CompositionModel.create({
      composer: userId,
       title, 
       price, 
       isPublish,
       category, 
       file: filename,
       image: imageName,
       compo_type: compo_type,
    })
}

export const createWrittenComposition = async ( { file, writtenInput}) => {
  const existingUser = await User.findById(writtenInput.userId);
  await Promise.all(file).then(async  res =>{
    console.log(res[0])
    if(existingUser){
       const composition =  await insertComposition(res[0].filename, res[1].filename, writtenInput)
       res.map(item =>{
         console.log(item)
      const typeFile =  path.extname(item.filename).toLowerCase() ===  ".mp3" || ".wav" || ".pdf" || ".jpeg" || ".png" || ".jpg"  ? "compositions" : null 
      uploadToDirectory(item, writtenInput.userId ,typeFile, composition._id)
      return item
    })
  }  
  })
  
 
}

{/* USER COMPOSITION RELATION */}

export const getAllCompisition = async () => {
  return await CompositionModel.find().populate("composer").then((user) => {
    const dataMaped =  user.map((item)=>{
      const {composer: {username, email, isConfirmed},_id,title,price, category, file, image, compo_type, views, isPublish} = item;
     return {
             username,
            _id,
            title,
            compo_type,
            category,
            file, 
            price,
            isPublish,
            image,
        }
      })
      console.log(dataMaped)
     return dataMaped;
  })    
};


export const getAllWrittenCompisitionByUserId = async  () => {
        const listCompo = await CompositionModel.find()
        console.log(listCompo)
        
        return listCompo.map((item) =>{
          if(existsSync(dir)) return item;
        })
};


export const streamFile = async ({composer, _id, file}) =>{
      return streamMusicFromCloud(file)
  
}
{/* COMPOSITION RELATION FINISH */}


