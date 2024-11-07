import express from "express";
import { createHackathon } from "../controllers/hackathonController.js";
import { updateHackathonDetails } from "../controllers/hackathonController.js"
import { publishHackathonResults } from "../controllers/hackathonController.js";

const router = express.Router();
router.post('/createhackathon',createHackathon);
router.put('/updateHackathonDetails',updateHackathonDetails);
router.put('/publishResults',publishHackathonResults);

export default router;