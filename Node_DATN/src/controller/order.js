import orderSchema from "../models/order.js"
import { JoiOrder } from "../schema/order.js"

export const getAllOrder = async (req, res) => {
    try {
        const order = await orderSchema.find();

        if (!order.length) {
            return res.status(400).json("Chưa có bất kì order nào !");
        };

        return res.status(200).json({
            message: "Tất cả thông tin về order",
            order
        });
    } catch (error) {
        return res.status(404).json({ mesage: "lỗi lấy tất cả order !", error })
    }
};

export const getOneOrder = async (req, res) => {
    try {
        const order = await orderSchema.findOne({ _id: req.params.id });

        if (!order) {
            return res.status(400).json("Không thấy 1 order cần tìm !");
        };

        return res.status(200).json({
            message: "Thấy 1 order",
            order
        });
    } catch (error) {
        return res.status(404).json({ mesage: "lỗi lấy 1 order !", error })
    }
};

export const createOrder = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json("Hãy thêm thông tin order cần tạo !");
        };

        const { error } = JoiOrder.validate(req.body, { abortEarly: false });
        if (error) {
            const err = error.details[0].message;
            return res.status(400).json({
                message: "Lỗi joi ==> ",
                err
            });
        };

        const order = await orderSchema.create({
            ...req.body,
            status:false,
        });

        return res.status(200).json({
            message: "Đã thêm 1 order",
            order
        });
    } catch (error) {
        return res.status(404).json({ mesage: "lỗi thêm 1 order !", error })
    }
};

export const updateOrder = async (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(400).json("Không tìm thấy order cần update !");
        };

        const { error } = JoiOrder.validate(req.body, { abortEarly: false });
        if (error) {
            const err = error.details[0].message;
            return res.status(400).json({
                message: "Lỗi joi ==> ",
                err
            });
        };

        const order = await orderSchema.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });

        return res.status(200).json({
            message: "Đã cập nhật xong order",
            order
        });
    } catch (error) {
        return res.status(404).json({ mesage: "lỗi update order !", error })
    }
};

export const removeOrder = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json("Hãy thêm thông tin order cần tạo !");
        };

        const order = await orderSchema.findByIdAndDelete({ _id: req.params.id });

        return res.status(200).json({
            message: "Đã xóa 1 order",
            order
        });
    } catch (error) {
        return res.status(404).json({ mesage: "lỗi xóa 1 order !", error })
    }
};