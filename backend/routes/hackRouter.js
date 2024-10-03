import express from "express";
import { createHackathon } from "../controllers/hackathonController.js";

const router = express.Router();
router.post('/createhackathon',createHackathon);

export default router;