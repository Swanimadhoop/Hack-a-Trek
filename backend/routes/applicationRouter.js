import express from 'express';
import { registerApplication } from '../controllers/applicationController.js';

const router = express.Router();

// Route for registering hackathon application
router.post('/register', registerApplication);

export default router;
