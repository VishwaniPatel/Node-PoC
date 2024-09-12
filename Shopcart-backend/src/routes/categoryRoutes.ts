import express from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
} from "../controllers/categoryController";
import subCategoryRouter from "./subCategoryRoutes";

const categoryRouter = express.Router();

categoryRouter.route("/").get(getAllCategories).post(createCategory);

categoryRouter.route("/:id").delete(deleteCategory);

// Nested route for subcategories
categoryRouter.use("/:categoryId/subcategories", subCategoryRouter);
export default categoryRouter;
