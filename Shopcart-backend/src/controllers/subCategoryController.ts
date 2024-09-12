import Subcategories from "../models/subCategoryModel";

export const getAllSubcategories = async (req: any, res: any) => {
  try {
    const subcategories = await Subcategories.find().populate("categoryId");

    res.status(200).json({
      status: "success",
      results: subcategories.length,
      data: {
        subcategories,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const createSubcategory = async (req: any, res: any) => {
  try {
    const { categoryId } = req.params;
    const { subCategoryName, imageUrl } = req.body;

    const newSubcategory = await Subcategories.create({
      categoryId,
      subCategoryName,
      imageUrl,
    });

    res.status(201).json({
      status: "success",
      data: {
        newSubcategory,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
export const getSubcategoriesByCategory = async (req: any, res: any) => {
  try {
    const { categoryId } = req.params;
    const subcategories = await Subcategories.find({ categoryId: categoryId });

    res.status(200).json({
      status: "success",
      results: subcategories.length,
      data: subcategories,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
