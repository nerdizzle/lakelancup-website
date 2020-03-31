import {Schema, Document, Model, model} from "mongoose";
import mongoose from "mongoose";

export interface IWebAdmin extends Document {
  username: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
  },
  hash: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
}

export const WebAdminSchema = new mongoose.Schema({
    username: String,
    password: String,
    hash: String,
    salt: String
  });
  /*
WebAdminSchema.pre("save", (next) => {
  let now = new Date();
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});
*/
export const WebAdmin: Model<IWebAdmin> = mongoose.model<IWebAdmin>("WebAdmin", WebAdminSchema,"webadmin");
export default WebAdmin;
