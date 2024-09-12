import Categories from "../models/categoryModel";

export const getAllCategories = async (req: any, res: any) => {
  try {
    const categories = await Categories.find();

    // send response
    res.status(200).json({
      status: "success",
      results: categories.length,
      data: {
        categories,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const createCategory = async (req: any, res: any) => {
  try {
    const newCategory = await Categories.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        category: newCategory,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const deleteCategory = async (req: any, res: any) => {
  try {
    await Categories.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
