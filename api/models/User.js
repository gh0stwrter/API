import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
});


 UserSchema.pre('save', async function (next)  {
   const user = this;
   this.password = await bcrypt.hash(user.password, 10);
   next();
 });

 UserSchema.methods.isValidatePassword = async (password) => {
   const User = this;
   return await bcrypt.compare(password, User.password);
 };

export default mongoose.model('UserModel', UserSchema);