import express from 'express';
const router = express.Router();
import { sendInquiry } from '../controllers/inquiry.controller.js';

router.post('/inquiry', sendInquiry);

export default router;
