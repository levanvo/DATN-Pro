import express from "express";
import { Create, Remove, getAll } from "../controllers/test";

const router=express.Router();

router.get("/test",getAll);
router.post("/test",Create);
router.delete("/test/:id",Remove);

export default router;