import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./router/user.js";
import connectDB from "../configs/database.js";
dotenv.config();
const app = express();
const PORT  = process.env.PORT || 3000;

// kết nối database
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api", userRouter);

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});



