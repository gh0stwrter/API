import mongoose from "mongoose";
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

export default mongoose.model("UserModel", UserSchema);
