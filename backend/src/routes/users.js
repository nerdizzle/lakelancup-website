import getUserInfo from "../middlewares/user.js";
const userInfo = (router) => {
    return router.get("/lakelandcup/api/v1.0/subscriber/info", getUserInfo);
};
const auth = (router) => {
    return router.get("/lakelandcup/api/v1.0/subscriber/auth", getUserInfo);
};
export { userInfo };
export default userInfo;
