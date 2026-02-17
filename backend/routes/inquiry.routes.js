import express from "express";
import { sendInquiry } from "../controllers/inquiry.controller.js";

const router = express.Router();

router.post("/inquiry", sendInquiry);

export default router;
