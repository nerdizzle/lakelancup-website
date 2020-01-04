import { Router } from "express"
import getDefaultApiInfo from "../controllers/defaultController"

const apiInfo = (router: Router) => {
    return router.get("/", getDefaultApiInfo)
};

//export { subscriberInfo }
export default apiInfo;