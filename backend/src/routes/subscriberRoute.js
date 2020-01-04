import getSubscriberInfo from "../controllers/subscriberController.js";
const subscriberInfo = (router) => {
    return router.get("/api/subscriber/info", getSubscriberInfo);
};
//export { subscriberInfo }
export default subscriberInfo;
