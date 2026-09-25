import express from "express";
import cors from "cors";

import contactRoutes from "./routes/contact.routes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);

// Route test
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

export default app;