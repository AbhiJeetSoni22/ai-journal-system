import "dotenv/config";
import express from "express";
import cors from "cors";

import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./src/config/swagger.js";

import connectDB from "./src/config/db.js";
import journalRoutes from "./src/routes/journal.routes.js";
import { apiLimiter } from "./src/middleware/rateLimiter.js";

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", apiLimiter);

app.use("/api", journalRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send("AI Journal API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});