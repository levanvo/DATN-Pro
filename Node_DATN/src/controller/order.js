import Order from "../models/order.js"
import Cart from "../models/cart.js"

export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate("products.productId").populate({path: "userId", select: "username"}).sort({ createdAt: -1 });
        if(orders.length === 0){
            return res.status(400).json({
                message: "Không lấy được danh sách Order!"
            })
        }
        return res.status(200).json(orders);
    } catch (error) {
        return res.status(500).json({ message: "Lỗi khi lấy danh sách đơn hàng", error });
    }
};

export const getOneOrders = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate("products.productId").populate({path: "userId", select: "username"});
        if (!order) {
          return res.json({
            message: "Không tìm thấy Order!",
          });
        }
        return res.status(200).json(order);
      } catch (error) {
        return res.status(400).json({
          message: error.message,
        });
      }
};

export const getUserOrders = async (req, res) => {
    const userId = req.user._id;

    try {
        const orders = await Order.find({ userId }).populate("products.productId").populate({path: "userId", select: "username"});
        if(orders.length === 0){
            return res.status(400).json({
                message: "Bạn chưa có đơn hàng nào"
            })
        }

        return res.status(200).json(orders);
    } catch (error) {
        return res.status(500).json({ message: "Lỗi khi lấy danh sách đơn hàng", error });
    }
};



export const getOneOrder = async (req, res) => {
    const userId = req.user._id;
    const orderId = req.params.id;

    try {
        const order = await Order.findOne({ _id: orderId, userId }).populate("productId");

        if (!order) {
            return res.status(404).json({
                message: "Không tìm thấy đơn hàng"
            });
        }

        return res.status(200).json({
            message: "Thông tin đơn hàng",
            order
        });
    } catch (error) {
        return res.status(500).json({ message: "Lỗi khi lấy thông tin đơn hàng", err: error.message });
    }
};


//generateRandomCode() --> Hàm thực thi tạo ngẫu nhiên mã đơn hàng
const generateRandomCode = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';

    const randomLetters = Array.from({ length: 3 }, () => letters[Math.floor(Math.random() * letters.length)]);
    const randomDigits = Array.from({ length: 3 }, () => digits[Math.floor(Math.random() * digits.length)]);

    return randomLetters.join('') + randomDigits.join('');
};


export const createOrder = async (req, res) => {
    const userId = req.user._id;
    try {
        if (!req.body) {
            return res.status(400).json("Hãy thêm thông tin order cần tạo !");
        };

        const codeOrder = generateRandomCode();

        const order = await Order.create({ ...req.body, userId, code_order: codeOrder });

        const productIdsToDelete = req.body.cartId;
        for (const productIdToDelete of productIdsToDelete) {
            
            await Cart.updateMany(
                { userId: req.user._id, 'products._id': productIdToDelete },
                { $pull: { products: { _id: productIdToDelete } } }
            );
        }
        

        return res.status(200).json({
            message: "Đã thêm 1 order",
            order
        });
    } catch (error) {
        return res.status(404).json({ mesage: "lỗi thêm 1 order !", err: error.message })
    }
};

export const updateOrder = async (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(400).json("Không tìm thấy order cần update !");
        };

        // const { error } = JoiOrder.validate(req.body, { abortEarly: false });
        // if (error) {
        //     const err = error.details[0].message;
        //     return res.status(400).json({
        //         message: "Lỗi joi ==> ",
        //         err
        //     });
        // };
        console.log('body' , req.body);

        const order = await Order.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
        
        
        console.log('order', order);
        
        return res.status(200).json({
            message: "Đã cập nhật xong order",
            order
        });
    } catch (error) {
        return res.status(404).json({ mesage: "lỗi update order !", error: error.message })
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