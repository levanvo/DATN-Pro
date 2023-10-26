import express from "express"
import {
  createProduct,
  getProduct,
  readProduct,
  removeProduct,
  updateProduct,
  restoreProduct,
  getAllDeletedProducts
} from "../controller/product.js"
const router = express.Router()

router.get("/products", getProduct)
router.get("/product/:id", readProduct)
router.post("/product", createProduct)
router.delete("/product/:id", removeProduct)
router.patch("/product/:id", updateProduct)
router.put("/product/restore/:id",restoreProduct)
router.get("/restore-product-data", getAllDeletedProducts)

export default router
