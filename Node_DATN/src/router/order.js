import express from "express";
import {
    createOrder,
    getAllOrder,
    getOneOrder,
    removeOrder,
    updateOrder
} from "../controller/order.js"

const router = express.Router();

router.get("/order", getAllOrder);
router.get("/order/:id", getOneOrder);
router.post("/order", createOrder);
router.delete("/order/:id", removeOrder);
router.patch("/order/:id", updateOrder);
router.put("/order/:id", updateOrder);

export default router