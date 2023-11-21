import mongoose from "mongoose"
import moment from "moment-timezone"

const discountCodeSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
    },
    percentage: {
      type: Number,
      required: true,
    },
    minimumOrderAmount: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
)

// discountCodeSchema.pre("save", function (next) {
//   this.createdAt = moment().tz("Asia/Ho_Chi_Minh").format()
//   this.updatedAt = moment().tz("Asia/Ho_Chi_Minh").format()
//   next()
// })

export default mongoose.model("DiscountCode", discountCodeSchema)
