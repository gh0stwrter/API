import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isComposer: {
      type: Boolean,
      default: false,
  },
  isOnline: {
    type: Boolean,
    default: false,  
  },
 
  avatar:{
    type:String,
},

role: {
  type: String,
  required: true,
  enum: ['Admin', 'GhostComposer'],
  default: 'GhostComposer'
},
following: [
    {
        user:{ 
            type: Schema.ObjectId, 
            ref: 'User' 
        },
    }

],
followers: [
    {
        user:{ 
            type: Schema.ObjectId, 
            ref: 'User' 
        },
    }
],

  isConfirmed: {
    type:Boolean,
    default: false,
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

UserSchema.pre("save", async function(next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

UserSchema.methods.isValidatePassword = (password, user) => {
  return bcrypt.compare(password, user.password);
};

export default mongoose.model("User", UserSchema);
