import {Schema, Document, Model, model} from "mongoose";
import mongoose from "mongoose";

export interface IPerson {
    firstName: String;
    lastName: String;
    fullName(): string;
    createdAt: Date;
}
export interface IUserModel extends IPerson, Document {
    email: String;
    password: String;
}

export const UserSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
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
  UserSchema.methods.fullName = function(): string {
    return (this.firstName.trim() + " " + this.lastName.trim());
  };

  export const User: Model<IUserModel> = mongoose.model<IUserModel>("User", UserSchema,"users");
  export default User;