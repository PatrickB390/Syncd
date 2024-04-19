import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import artistsRoute from "./routes/artists.js";
import slotsRoute from "./routes/slots.js";
import cookieParser from "cookie-parser";
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
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/artists", artistsRoute);
app.use("/api/slots", slotsRoute);

app.use((err,req,res,next)=>{
  const errortStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong!"
  return res.status(errortStatus).json({
    success: false,
    status: errortStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, ()=>{
    connect()
    console.log("Connected to backend.")
})