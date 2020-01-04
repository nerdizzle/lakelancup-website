import {Request, Response} from "express"

const getSubscriberInfo = async (req: Request, res: Response) => {
    res.send('subscriber info!')
};
export {getSubscriberInfo};
export default getSubscriberInfo;
