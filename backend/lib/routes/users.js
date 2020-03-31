import { findAdmin } from '../middlewares/user.js';
export const getAdmin = (router) => {
    return router.get("/lakelandcup/api/v1.0/user/:username", findAdmin);
};
