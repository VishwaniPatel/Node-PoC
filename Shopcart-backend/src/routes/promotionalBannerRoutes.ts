import express from "express";
import {
  createPromotionalBanner,
  deletePromotionalBanner,
  getPromotionalBanner,
} from "../controllers/promotionalBannerContoller";
import upload from "../middleware/upload";

const promotionalBannerRouter = express.Router();
promotionalBannerRouter
  .route("/")
  .get(getPromotionalBanner)
  .post(upload.single("image"), createPromotionalBanner);
promotionalBannerRouter.route("/:id").delete(deletePromotionalBanner);
export default promotionalBannerRouter;
