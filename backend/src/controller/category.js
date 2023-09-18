import Category from '../models/category.js';

export const getAll = async (req, res) => {
  try {
    //   const categorys = await Category.find().populate("products");
    const categorys = await Category.find();
    if (categorys.length === 0) {
      return res.json({
        message: "Không lấy được danh sách Category!",
      });
    }
    return res.status(200).json({
      message: "Lấy danh sách Category thành công!",
      data: categorys,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

export const get = async (req, res) => {
  try {

    // const categorys = await Category.findById(req.params.id).populate("products");
    const categorys = await Category.findById(req.params.id).populate("products");

    if (!categorys) {
      return res.json({
        message: "Không tìm thấy Category!",
      });
    }4
    const product = await Product.find({ categoryId: req.params.id })
    return res.status(200).json({
      message: "Lấy Category thành công!",
      data: categorys,
      product
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

export const create = async (req, res) => {
  try {

    const categorys = await Category.create(req.body);

    if (!categorys) {
      return res.json({
        message: "Thêm Category không thành công!",
      });
    }
    return res.status(200).json({
      message: "Thêm Category thành công!",
      data: categorys,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

export const remove = async (req, res) => {
  try {
    const categoryId = req.params.id;

    const categorys = await Category.findByIdAndDelete({ _id: req.params.id });
    if (!categorys) {
      return res.json({
        message: "Không tìm thấy Category!",
      });
    }
    await Product.deleteMany({ categoryId });
    
    return res.status(200).json({
      message: "Category đã được xóa!",
      data: categorys,
    })
  }
  catch (error) {
    return res.status(500).json({
      message: error,
    })
  }
}

export const update = async (req, res) => {
  try {
    const categorys = await Category.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
    if (!categorys) {
      return res.status(404).json({
        message: "Không tìm thấy Category!",
      });
    }
    return res.status(200).json({
      message: "Category đã được cập nhật thành công!",
      data: categorys,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};