import express from "express";

import { pingController } from "../../controllers/ping-controller.js";

const router = express.Router();

router.get("/ping", pingController);


export default router;