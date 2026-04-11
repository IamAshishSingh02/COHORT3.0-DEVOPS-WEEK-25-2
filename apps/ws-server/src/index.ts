import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), "../../.env") });

import { WebSocketServer } from "ws";
import { prisma } from "@repo/db";

const PORT = parseInt(process.env.WS_PORT || "3001", 10);
const wss = new WebSocketServer({ port: PORT });

wss.on("connection", async (socket) => {
  try {
    await prisma.user.create({
      data: {
        name: "Ashish Singh",
        email: "psssasds212004@gmail.com",
      },
    });
    socket.send("Connected to the server!");
  } catch (error) {
    console.error("Error on WebSocket connection:", error);
    socket.close();
  }
});

wss.on("listening", () => {
  console.log(`WebSocket server running on ws://localhost:${PORT}`);
});

wss.on("error", (error: any) => {
  if (error.code === "EADDRINUSE") {
    console.error(
      `Port ${PORT} is already in use. Please stop other processes or set WS_PORT environment variable.`,
    );
  } else {
    console.error("WebSocket server error:", error);
  }
});
