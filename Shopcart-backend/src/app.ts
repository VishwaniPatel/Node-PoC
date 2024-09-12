import express from "express";
import cors from "cors";
import multer from "multer";
import prouctRouter from "./routes/productRoutes";
import categoryRouter from "./routes/categoryRoutes";
import subCategoryRouter from "./routes/subCategoryRoutes";
import heroSectionrouter from "./routes/heroSectionRoutes";
import bodyParser from "body-parser";
import promotionalBannerRouter from "./routes/promotionalBannerRoutes";
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json({ limit: "50mb" })); // Adjust the size limit if needed
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true })); // Adjust the size limit if needed

// Static files
app.use("/public", express.static("public"));
// MIDDLEWARE to modify data
app.use(express.json());

// app.use("/api/v1/products", prouctRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/subcategories", subCategoryRouter);
app.use("/api/v1/heroSection", heroSectionrouter);
app.use("/api/v1/promotionalBanner", promotionalBannerRouter);

export default app;
