import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import userRouter from "./router/user.js"
import sizeRouter from "./router/size.js"
import colorRouter from "./router/color.js"
import categoryRouter from "./router/category.js"
import productRouter from "./router/product.js"
import uploadRouter from "./router/upload.js"
import connectDB from "../configs/database.js"
import cartRouter from "./router/cart.js"

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

// kết nối database
connectDB()

app.use(cors())
app.use(express.json())
app.use("/api", userRouter)
app.use("/api", sizeRouter)
app.use("/api", colorRouter)
app.use("/api", categoryRouter)
app.use("/api", productRouter)
app.use("/api", uploadRouter)
app.use("/api", cartRouter)



app.listen(PORT, () => {
  console.log("Server running on port", PORT)
})
