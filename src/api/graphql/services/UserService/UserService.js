import UserModel from "../../../models/User";
import WrittenCompositionModel from "../../../models/Compisition/Composition";

import { AuthLogin } from "./AuthService";
import {dataUser} from "./utilities";

export const addUser = async data => {
  const user = new UserModel(data);
  await user.save();
  return userLogin(user);
};

export const userLogin = data => {
  return AuthLogin(data.email, data.password);
};

export const getUsers = data => {
  return UserModel.find();
  
};
export const  currentUser = (data) =>{
  console.log(data)
}
export const deleteAccount = async (token) => {
  const id = dataUser(token)._id;
  let message = "Une erreur est survenu";
  if(id) {
    UserModel.remove({ _id: id }, function(err) {
      if (!err) {
              message = "Votre compte a bien été supprimer .";
      } else {
              console.error(err);
      }
  });
}
  return message;
};



{/* USER SOCIAL RELATION */}
export const following = (data) =>{
      let idFollower = data.follower;
      let idFollowing = data.following;
      console.log(idFollower + " : " + idFollowing)
      let updateFollowing = {following:[{
        user: idFollowing
      }]};
      let updateFollower = {followers:[{
        user: idFollower
      }]};

      UserModel.findOneAndUpdate({_id: idFollower},updateFollowing)
    .then(res => {
      return res
    }
    )

      UserModel.findOneAndUpdate({_id: idFollowing},updateFollower)
      .then(res => {
        return res
   }
   )
};

export const unFollow = (data) => {
    
}
export const  userCreatePost = (data) => {
  
};

export const userDeletePost = (data) => {

}

export const userLike = (data) => {

}

export const userUnlike = (data ) =>{

}

export const userShare = (data) => {

}

{/* USER SOCIAL FINISH */}
