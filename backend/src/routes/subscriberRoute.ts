import { Router } from "express"
import getSubscriberInfo from "../controllers/subscriberController"

const subscriberInfo = (router: Router) => {
    return router.get("/api/subscriber/info", getSubscriberInfo)
};
//export { subscriberInfo }
export default subscriberInfo;