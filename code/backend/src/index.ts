import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { apiRouter } from "./routes/credit.route.js";
import cors from "cors";

const app = express();
const port = process.env.BACKEND_PORT;

app.use(express.json());
app.use(express.urlencoded());

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
  })
);

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
