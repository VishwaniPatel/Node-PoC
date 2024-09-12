import mongoose from "mongoose";

const heroSectionSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  imageUrl: { type: String },
});

const HeroSection = mongoose.model("heroSection", heroSectionSchema);
export default HeroSection;
