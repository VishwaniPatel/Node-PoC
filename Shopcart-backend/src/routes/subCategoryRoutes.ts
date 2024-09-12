import express from "express";
import {
  createSubcategory,
  getAllSubcategories,
  getSubcategoriesByCategory,
} from "../controllers/subCategoryController";
import upload from "../middleware/upload";
import {
  createProduct,
  getAllProducts,
} from "../controllers/productController";

const subCategoryRouter = express.Router({ mergeParams: true });

// Use the upload middleware to handle the image file
subCategoryRouter
  .route("/")
  .get(getAllSubcategories)
  .get(getAllProducts)
  .post(upload.single("image"), createSubcategory);
subCategoryRouter.route("/:categoryId").get(getSubcategoriesByCategory);
subCategoryRouter.route("/:subCategoryId/products").post(createProduct);
export default subCategoryRouter;
