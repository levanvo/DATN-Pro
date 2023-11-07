import express from "express"
import { getAll, create } from "../controller/newSletter.js"

const router = express.Router()

router.get("/newSletter", getAll)
router.post("/newSletter", create)

export default router
