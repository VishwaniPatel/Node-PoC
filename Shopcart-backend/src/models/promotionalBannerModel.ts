import mongoose from "mongoose";

const promotionalBannerSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  imageUrl: { type: String },
});

const PromotionalBanner = mongoose.model(
  "promotionalBanner",
  promotionalBannerSchema
);
export default PromotionalBanner;
