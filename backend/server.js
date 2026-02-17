import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import inquiryRoutes from "./routes/inquiry.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // or restrict later
app.use(express.json());

app.use("/api", inquiryRoutes);

app.get("/", (req, res) => {
  res.send("AI Healthcare KMC Backend running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
