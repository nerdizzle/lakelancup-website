import { findUser, findUsers } from "../middlewares/user.js";
const getUser = (router) => {
    return router.get("/lakelandcup/api/v1.0/user/:username", findUser);
};
const getUsers = (router) => {
    return router.get("/lakelandcup/api/v1.0/user/users", findUsers);
};
const auth = (router) => {
    return router.get("/lakelandcup/api/v1.0/user/auth", getUser);
};
export { getUser, getUsers };
export default getUser;
