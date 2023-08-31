import express from "express";
import mongoose from "mongoose";
import router from "./routers/test";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/testVoLe")
    .then(() => { console.log('Database connection successful') })
    .catch(err => {
        console.error('Database disconnected ====> ' + err)
    });
app.use(router);

export const viteNodeApp = app;