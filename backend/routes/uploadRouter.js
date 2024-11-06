import express from "express";
import { uploadProject } from "../controllers/uploadController.js";

const router = express.Router();

// Upload route
router.post("/", uploadProject);

export default router;
