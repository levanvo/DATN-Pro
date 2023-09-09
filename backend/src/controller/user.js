import bcrypt from "bcryptjs"
import User from "../models/user.js";
export const signup = async (req, res) => {
    try {
      const { username, email, password } = req.body;

      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(402).json({
          message: "Email đã tồn tại",
        });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        email,
        username,
        password: hashedPassword,
      });
      if (!newUser) {
        return res.status(401).json({
          message: "Đăng ký không thành công",
        });
      }
      newUser.password = undefined;
      return res.status(200).json({
        message: "Đăng ký thành công",
        newUser,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  };