import {Request, Response} from "express";
import User from "../schemas/user";

const findUser = async (req: Request, res: Response) => {  
    //const result = await User.find({});
    console.log(req.params)
    res.send(req.params.username);
};

const findUsers = async (req: Request, res: Response) => {  
    const result = await User.find({});
    res.send(result);
};
export {findUser, findUsers};
export default findUser;
