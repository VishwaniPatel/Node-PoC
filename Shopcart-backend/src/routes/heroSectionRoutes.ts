import express from "express";
import {
  createHeroSectionData,
  deleteHeroSectionData,
  getHeroSection,
} from "../controllers/heroSectionController";
import upload from "../middleware/upload";
const heroSectionrouter = express.Router();
heroSectionrouter
  .route("/")
  .get(getHeroSection)
  .post(upload.single("image"), createHeroSectionData);
heroSectionrouter.route(":/id").delete(deleteHeroSectionData);
export default heroSectionrouter;
