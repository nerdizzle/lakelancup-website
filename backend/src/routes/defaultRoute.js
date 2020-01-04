import getDefaultApiInfo from "../controllers/defaultController.js";
const apiInfo = (router) => {
    return router.get("/", getDefaultApiInfo);
};
//export { subscriberInfo }
export default apiInfo;
