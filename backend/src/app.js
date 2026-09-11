

import  express from "express";
import {createServer} from "node:http";

import {Server} from "socket.io";

import mongoose from  "mongoose";
import {connectToSocket} from "./controllers/socketManager.js"; 
import cors from "cors";
import userRoutes from "./routes/users.routes.js";

import dns from "dns";
dns.setServers(["8.8.8.8","1.1.1.1"]);

const app = express();
const server =  createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit: "40kb" , extended:true}));

app.use("/api/v1/users", userRoutes);
app.get("/home", (req, res) => {
    return res.json({"hello": "World"})
});
const start = async() => {
    const connectionDb = await mongoose.connect("mongodb+srv://raushaniraj308_db_user:AWPL8990@cluster0.tsuboua.mongodb.net/?appName=Cluster0")
    console.log(`MONGO Connected DB Host: ${connectionDb.connection.host}`)
    server.listen(app.get("port"), () => {
      console.log("LISTENIN ON PORT 8000")  
    });
}
start();