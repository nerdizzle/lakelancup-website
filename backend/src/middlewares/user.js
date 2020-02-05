import User from "../schemas/user.js";
const findUser = async (req, res) => {
    //const result = await User.find({});
    console.log(req.params);
    res.send(req.params.username);
};
const findUsers = async (req, res) => {
    const result = await User.find({});
    res.send(result);
};
export { findUser, findUsers };
export default findUser;
