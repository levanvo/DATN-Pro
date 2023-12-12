import express from "express";
import {generateStatisticsForSpecificDate, generateStatisticsFutureDate, generateStatisticsYesterday } from "../controller/statistic.js";


const router = express.Router();
router.post("/generate-daily", generateStatisticsForSpecificDate);
router.post("/generate-qua", generateStatisticsYesterday);
router.post("/generate-mai", generateStatisticsFutureDate);


export default router;