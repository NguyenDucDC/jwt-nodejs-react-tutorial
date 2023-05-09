import express from "express";
import homeController from "../controller/homeController";

const router = express.Router();

const initWebRoutes = (app) => {
    router.get('/', homeController.handleHelloworld);
    router.get('/user', homeController.handleUserpage);

    return app.use('/', router);
}

export default initWebRoutes;