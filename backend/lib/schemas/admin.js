import mongoose from "mongoose";
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
export const WebAdmin = mongoose.model("WebAdmin", WebAdminSchema, "webadmin");
export default WebAdmin;
