import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), "../../.env") });

import { WebSocketServer, WebSocket } from 'ws'
import { prisma } from "@repo/db";

const wss = new WebSocketServer({ port: 3001 })

wss.on('connection', async (socket) => {
  await prisma.user.create({
    data: {
      name: 'Ashish Singh',
      email: 'psssasds212004@gmail.com'
    }
  })
  socket.send('Connected to the server!')
})