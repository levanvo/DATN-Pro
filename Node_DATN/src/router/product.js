import express from "express"
import {
  createProduct,
  getProduct,
  readProduct,
  removeProduct,
  updateProduct,
  restoreProduct,
  getAllDeletedProducts,
  deleteProduct,
  getHotProducts,
  createProductVariant,
  deleteVariant
} from "../controller/product.js"
const router = express.Router()

router.get("/products", getProduct)
router.post('/product/:id/variants', createProductVariant);
router.get("/product/:id", readProduct)
router.post("/product", createProduct)
router.put("/product/:id", removeProduct)
router.patch("/product/:id", updateProduct)
router.put("/product/restore/:id",restoreProduct) //khôi phục sản phẩm
router.get("/restore-product-data", getAllDeletedProducts) // in ra tất cả sản phẩm xóa tạm thời
router.delete("/product/:id/delete", deleteProduct) // xóa sản phẩm vĩnh viễn
router.get("/hot-product", getHotProducts) //lấy sản phẩm hot
router.put("/product-variant/:id/delete",deleteVariant) // xóa biến thể sản phẩm

export default router
