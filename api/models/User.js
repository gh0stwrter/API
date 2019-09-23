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

 UserSchema.methods.isValidatePassword =  (password) => {
   const user = this;
    return bcrypt.compare(password, user.password);
 };

export default mongoose.model('UserModel', UserSchema);