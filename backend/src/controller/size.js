import Size from '../models/size.js';

export const getAll = async (req, res) => {
  try {
    const sizes = await Size.find();
    if (sizes.length === 0) {
      return res.json({
        message: "Không lấy được danh sách size!",
      });
    }
    return res.status(200).json({
      message: "Lấy danh sách size thành công!",
      data: sizes,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

export const get = async (req, res) => {
  try {

    const sizes = await Size.findById(req.params.id);

    if (!sizes) {
      return res.json({
        message: "Không tìm thấy size!",
      });
    }
    return res.status(200).json({
      message: "Lấy size thành công!",
      data: sizes,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

export const create = async (req, res) => {
  try {

    const sizes = await Size.create(req.body);

    if (!sizes) {
      return res.json({
        message: "Thêm size không thành công!",
      });
    }
    return res.status(200).json({
      message: "Thêm size thành công!",
      data: sizes,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

export const remove = async (req, res) => {
  try {
    const sizes = await Size.findByIdAndDelete({ _id: req.params.id });
    if (!sizes) {
      return res.json({
        message: "Không tìm thấy size!",
      });
    }
    return res.status(200).json({
      message: "Size đã được xóa!",
      data: sizes,
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
    const sizes = await Size.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
    if (!sizes) {
      return res.status(404).json({
        message: "Không tìm thấy size!",
      });
    }
    return res.status(200).json({
      message: "Size đã được cập nhật thành công!",
      data: sizes,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};