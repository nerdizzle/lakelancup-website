import { Router } from "express"
import {findUser, findUsers} from "../middlewares/user"

const getUser = (router: Router) => {
    return router.get("/lakelandcup/api/v1.0/user/:username", findUser)
};

const getUsers = (router: Router) => {
    return router.get("/lakelandcup/api/v1.0/user/users", findUsers)
};

const auth = (router: Router) => {
    return router.get("/lakelandcup/api/v1.0/user/auth", getUser)
};
export {getUser, getUsers};
export default getUser;
