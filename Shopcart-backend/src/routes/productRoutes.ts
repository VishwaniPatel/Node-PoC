import express from "express";
import {
  createProduct,
  getAllProducts,
} from "../controllers/productController";

const productRouter = express.Router();

// Route for getting all products and creating a new product
productRouter.route("/").get(getAllProducts);
productRouter.route("/:subCategoryId/products").post(createProduct);
export default productRouter;
