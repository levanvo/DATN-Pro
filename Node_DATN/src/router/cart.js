import express from "express";
import { addToCart, deleteToCart, getCart } from "../controller/cart.js";
import {checkPermissionCart} from "../middleware/checkPermissionCart.js"
const router = express.Router()

router.get("/cart",checkPermissionCart,getCart)
router.delete("/cart/:id",checkPermissionCart,deleteToCart)
router.post("/cart",checkPermissionCart,addToCart)

export default router