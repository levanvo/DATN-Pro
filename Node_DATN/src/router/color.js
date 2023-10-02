import express from "express";
import { create, get, getAll, remove, update } from "../controller/color.js";

const router = express.Router();

router.get("/color", getAll);
router.get("/color/:id", get);
router.post("/color", create);
router.delete("/color/:id", remove);
router.put("/color/:id", update);

export default router