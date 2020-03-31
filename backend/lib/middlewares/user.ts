import {Request, Response} from "express";
import WebAdmin from '../schemas/admin.js';

export const findAdmin = async (req: Request, res: Response) => {
    console.log(req.params);
    const result = await WebAdmin.find({});
    res.send(result);
};

export const createAdmin = async (req: Request, res: Response) => {
    console.log(req.params);
    const result = await WebAdmin.find({});
    res.send(result);
};

//export default findAdmin;
