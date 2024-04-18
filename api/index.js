import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import artistsRoute from "./routes/artists.js";
import slotsRoute from "./routes/slots.js";
const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.")
      } catch (error) {
        throw error;
      }
    };

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected!")
});

//Middlewares

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/artists", artistsRoute);
app.use("/api/slots", slotsRoute);

app.listen(8800, ()=>{
    connect()
    console.log("Connected to backend.")
})