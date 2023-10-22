import express from "express";
import { addToCart, getCart } from "../controller/cart.js";
import {checkPermissionCart} from "../middleware/checkPermissionCart.js"
const router = express.Router()

router.get("/cart",checkPermissionCart,getCart)
router.post("/cart",checkPermissionCart,addToCart)

export default router