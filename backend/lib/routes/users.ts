import { Router } from "express"
import { findAdmin, createAdmin } from "../middlewares/user"

export const getAdmin = (router: Router) => {
    return router.get("/lakelandcup/api/v1.0/user/:username", findAdmin)
};

