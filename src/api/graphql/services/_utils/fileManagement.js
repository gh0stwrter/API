import { createWriteStream ,existsSync, readFileSync} from "fs";
import path from "path";
import shell from "shelljs";
import mongoose from "mongoose";
import mongobd from "mongodb";
import multer from "multer";
import {Readable} from "stream";
import AWS from "aws-sdk";
import { combineResolvers } from "graphql-resolvers";

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET
});




export const streamMusicFromCloud = async (filename) =>{
  const params = {
    Bucket:"global-compositions",
    Key: filename,
  }
 const s3Streams = s3.getObject(params)
 console.log(s3Streams)
//   s3Streams.on("data", chunk=>{
//     return chunk;
//   })
//   s3Streams.on("error", ()=>{
//     console.log("error From stream")
//   })
//   s3Streams.on("end", (res) =>{
//       return res.end()
//   })
 }

export const uploadToDirectory = async (file, userId,typeFile, idComposition) =>{
  try{
    const params = {
      Bucket:"global-compositions",
      Key: file.filename,
      Body: file.createReadStream(),
      ACL:'public-read',
    }

    s3.upload(params, function(err, data){
      console.log(data)
        if(err){
            throw err;
        }
    });
  }
  catch(error){
    console.log(error)
  }
 
//   console.log(file)
//     await new Promise((resolve, reject) => {
//         const dir = `${__dirname}/../compositions/${userId}/${typeFile}/${idComposition}`;

//         if(!existsSync(dir)) shell.mkdir('-p',dir)
//            if(existsSync(dir)){ 
//             //  const streamFile = fileOne.createReadStream()
//             //  const streamImage = fileTwo.createReadStream()
//                 const streamFile = file.createReadStream()
//                 streamFile.pipe(createWriteStream(path.join(__dirname, `/../compositions/${userId}/${typeFile}/${idComposition}` ,file.filename)))
//                 .on("close", resolve()) 
//             }
//             }
//              )  
// 
}