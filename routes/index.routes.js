import authRoute from "./auth.routes.js";
import express from "express";
const routes = [
    {
        path:"auth",
        route:authRoute
    }
]
const router = express.Router();

routes.forEach(route=>router.use(route.path,route.route))

export default router