import WrittenCompostionModel from "../../../models/Compisition/WrittenCompose";
import SonoreCompositionModel from "../../../models/Compisition/SonoreCompose";
import UserModel from "../../../models/User";
import User from "../../../models/User";
import {uploadToDirectory} from "../_utils/fileManagement";
import path from "path";


export const createSonore = async ( { file, writtenInput:{ title, userId, price, isPublish, category}}) => {
  console.log()
  const  {createReadStream, filename, mimetype, encoding } = await file;  
  const typeFile = path.extname(filename).toLowerCase() === ".mp3" ? "sonoreComp" : null 
  const stream = createReadStream()
  
  const existingUser = await User.findById(serId);
       if(existingUser && title && file && userId && price && isPublish && category){
        await  SonoreCompositionModel.create({
          composer: userId,
           title, 
           price, 
           isPublish, 
           file: filename,
        }).then(async (res) =>  {
          const dir = `${__dirname}/compositions/${userId}/${typeFile}/${res._id}`;
          console.log(res._id)
          await new Promise((resolve, reject) => {
            if(!existsSync(dir)) shell.mkdir('-p',dir)
               if(existsSync(dir)) stream.pipe(createWriteStream(path.join(__dirname, `/compositions/${userId}/${typeFile}/${res._id}` ,filename)))
                  .on("close", resolve())
                }
                 )  
        })

      
        return file;
}

}

const insertComposition = async (filename,imageName,{ title, userId, price, isPublish, category}) =>{
   return await WrittenCompostionModel.create({
      composer: userId,
       title, 
       price, 
       isPublish,
       category, 
       file: filename,
       image: imageName
    })
}

export const createWrittenComposition = async ( { file, writtenInput}) => {
  const existingUser = await User.findById(writtenInput.userId);
  
  await Promise.all(file[0]).then(async  res =>{
    if(existingUser){
      const files = {
        fileOne: res[0],
        fileTwo: res[1]
       }
       const {fileOne, fileTwo} = files;

       const composition =  await insertComposition(fileOne.filename, fileTwo.filename, writtenInput)
       console.log(composition)
       res.map(item =>{
      const typeFile =  path.extname(item.filename).toLowerCase() === ".pdf" || ".jpeg" || ".png" || ".jpg"  ? "writtenComp" : 
      path.extname(item.filename).toLowerCase() === ".mp3" || ".wav" || ".jpeg" || ".png" || ".jpg" ? "sonoreComp"  :null
      uploadToDirectory(item, writtenInput.userId ,typeFile, composition._id)
      return item
    })
  }
     
  })
  
 
}
  
               
  
  
  
  

{/* USER COMPOSITION RELATION */}

export const getAllSonorCompisitionByUserId = (data) => {
    const res = SonoreCompositionModel.find(data)
      .populate('composer');

      console.log(res)
    };


export const getAllWrittenCompisitionByUserId = async  (data) => {
    const listCompo = await WrittenCompostionModel.find(data)
        listCompo.map((item) =>{
          const dir = `${__dirname}/compositions/${item.composer}/writtenComp/${item._id}/${item.file}`;
          //if(existsSync(dir)) 
        })
};

{/* COMPOSITION RELATION FINISH */}


