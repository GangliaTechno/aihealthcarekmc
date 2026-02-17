import "./loadEnv.js";

import express from "express";
import cors from "cors";
import inquiryRoutes from "./routes/inquiry.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://landingpage-up3o.onrender.com",
    ],
    methods: ["POST"],
    allowedHeaders: ["Content-Type"],
  })
);


app.use(express.json());

// Routes
app.use("/api", inquiryRoutes);

app.get("/", (req, res) => {
  res.send("AI Healthcare KMC Backend is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
