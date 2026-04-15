import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), "../../.env") });

import { prisma } from "@repo/db";
import express from "express";

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ 
    status: "ok",
    message: "App is fucking healthy and the pipeline is working!", 
  });
});

app.post("/signup", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });

  res.status(201).json({
    success: true,
    message: "User Signed up successfully!",
    user,
  });
});

const PORT = parseInt(process.env.PORT || "3000", 10);

const server = app.listen(PORT, () => {
  console.log(`Http server running on http://localhost:${PORT}`);
});