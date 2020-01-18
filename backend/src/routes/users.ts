import { Router } from "express"
import getUserInfo from "../middlewares/user"

const userInfo = (router: Router) => {
    return router.get("/lakelandcup/api/v1.0/subscriber/info", getUserInfo)
};

const auth = (router: Router) => {
    return router.get("/lakelandcup/api/v1.0/subscriber/auth", getUserInfo)
};
export {userInfo};
export default userInfo;
