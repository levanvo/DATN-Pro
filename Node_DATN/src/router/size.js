import express from "express";
import { create, get, getAll, remove, update } from "../controller/size.js";
import { checkPermission } from "../middleware/checkPermission.js";

const router = express.Router();

router.get("/size", getAll);
router.get("/size/:id", get);
router.post("/size",checkPermission, create);
router.delete("/size/:id", remove);
router.put("/size/:id", update);

export default router