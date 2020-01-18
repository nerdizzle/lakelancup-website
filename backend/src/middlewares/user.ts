import {Request, Response} from "express"

const getUserInfo = async (req: Request, res: Response) => {
    res.send('subscriber info!')
};
export {getUserInfo};
export default getUserInfo;
