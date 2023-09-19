import express from "express"
import {
  createProduct,
  getProduct,
  readProduct,
  removeProduct,
  updateProduct,
} from "../controller/product.js"
const router = express.Router()

router.get("/products", getProduct)
router.get("/product/:id", readProduct)
router.post("/product", createProduct)
router.delete("/product/:id", removeProduct)
router.patch("/product/:id", updateProduct)

export default router
