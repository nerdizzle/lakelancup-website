import WebAdmin from '../schemas/admin.js';
export const findAdmin = async (req, res) => {
    console.log(req.params);
    const result = await WebAdmin.find({});
    res.send(result);
};
export const createAdmin = async (req, res) => {
    console.log(req.params);
    const result = await WebAdmin.find({});
    res.send(result);
};
//export default findAdmin;
