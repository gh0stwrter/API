import { createWriteStream ,existsSync} from "fs";
import path from "path";
import shell from "shelljs";

export const uploadToDirectory = async (file, userId,typeFile, idComposition) =>{
  
    await new Promise((resolve, reject) => {
        const dir = `${__dirname}/../compositions/${userId}/${typeFile}/${idComposition}`;

        if(!existsSync(dir)) shell.mkdir('-p',dir)
           if(existsSync(dir)){ 
            //  const streamFile = fileOne.createReadStream()
            //  const streamImage = fileTwo.createReadStream()
                const streamFile = file.createReadStream()
                streamFile.pipe(createWriteStream(path.join(__dirname, `/../compositions/${userId}/${typeFile}/${idComposition}` ,file.filename)))
                .on("close", resolve()) 
              
            }
            }
             )  
}