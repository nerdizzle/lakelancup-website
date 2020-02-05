import mongoose from "mongoose";
export const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
});
/*
UserSchema.pre("save", (next) => {
  let now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});
*/
UserSchema.methods.fullName = function () {
    return (this.firstName.trim() + " " + this.lastName.trim());
};
export const User = mongoose.model("User", UserSchema, "users");
export default User;
