import express from "express";
import {
    createOrder,
    getOneOrder,
    getUserOrders,
    removeOrder,
    updateOrder
} from "../controller/order.js"
import { checkPermissionOrder } from "../middleware/checkPermissionOrder.js";

const router = express.Router();

router.get("/order/view", checkPermissionOrder,getUserOrders);
router.get("/order/:id",checkPermissionOrder, getOneOrder);
router.post("/order",checkPermissionOrder, createOrder);
router.delete("/order/:id", removeOrder);
router.patch("/order/:id", updateOrder);
router.put("/order/:id", updateOrder);

export default router