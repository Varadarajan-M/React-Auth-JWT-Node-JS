import express from "express";

import logoutController from '../controllers/logout-controller'


const router = express.Router();

router.route("/logout").post(logoutController)

export default router;