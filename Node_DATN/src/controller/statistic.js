import Statistic from "../models/statistic.js";
import Order from "../models/order.js";
import Product from "../models/product.js";

// Thống kê theo ngày hôm nay
export const generateStatisticsForSpecificDate = async (req, res) => {
    try {
      const requestedDate = new Date(req.body.date);
  
      if (isNaN(requestedDate)) {
        return res.status(400).json({ success: false, error: "Invalid date format" });
      }
  
      // Lấy múi giờ hiện tại của máy chủ
      const serverTimeZoneOffset = new Date().getTimezoneOffset() * 60000;
  
      // Điều chỉnh ngày theo múi giờ của máy chủ
      const startDate = new Date(requestedDate.getTime() - serverTimeZoneOffset);
      const endDate = new Date(startDate.getTime() + 24 * 60 * 60 * 1000);
  
      const StatisticsByDay = await generateStatistics(startDate, endDate);
  
      res.status(200).json({
        success: true,
        message: "Daily statistics for the specified date generated successfully",
        StatisticsByDay,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  };

// Thống kê theo ngày hôm qua
export const generateStatisticsYesterday = async (req, res) => {
  try {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const startDate = new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate());
    const endDate = new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate() + 1);

    const statisticsYesterday = await generateStatistics(startDate, endDate);

    res.status(200).json({
      success: true,
      message: "Daily statistics for yesterday generated successfully",
      statisticsYesterday,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

// Thống kê theo ngày trong tương lai
export const generateStatisticsFutureDate = async (req, res) => {
  try {
    const requestedDate = new Date(req.body.date);

    if (isNaN(requestedDate)) {
      return res.status(400).json({ success: false, error: "Invalid date format" });
    }

    const startDate = new Date(requestedDate.getFullYear(), requestedDate.getMonth(), requestedDate.getDate());
    const endDate = new Date(requestedDate.getFullYear(), requestedDate.getMonth(), requestedDate.getDate() + 1);

    const statisticsFutureDate = await generateStatistics(startDate, endDate);

    res.status(200).json({
      success: true,
      message: "Daily statistics for the specified future date generated successfully",
      statisticsFutureDate,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

// Hàm chung để thực hiện thống kê cho một khoảng thời gian cụ thể
const generateStatistics = async (startDate, endDate) => {
    const orders = await Order.find({
      createdAt: { $gte: startDate, $lt: endDate },
    }).populate("products.productId", "name price");
  
    const statistics = [];
  
    let totalQuantity = 0; // tổng số lượng bán ra
  
    for (const order of orders) {
      for (const product of order.products) {
        const statistic = new Statistic({
          date: startDate,  // Sử dụng startDate thay vì requestedDate
          productId: product.productId?._id,
          userId: order.userId,
          quantity: product.quantity,
        });
  
        statistics.push(statistic);
  
        // Cập nhật tổng số lượng sản phẩm đã mua
        totalQuantity += product.quantity;
      }
    }
  
    await Statistic.insertMany(statistics);
  
    return { startDate, totalQuantity,orders };
  };
