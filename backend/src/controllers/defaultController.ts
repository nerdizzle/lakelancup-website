import {Request, Response} from "express"

const getDefaultApiInfo = async (req: Request, res: Response) => {
    const msg = {
        owner: "chief wiggum"
    }
    res.send(msg);
};
export {getDefaultApiInfo};
export default getDefaultApiInfo;
