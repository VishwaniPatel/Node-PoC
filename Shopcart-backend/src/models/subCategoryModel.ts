import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema({
  subCategoryName: {
    type: String,
    required: [true, "A sub-category must have a name"],
    trim: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categories",
    required: true,
  },
  imageUrl: {
    type: String,
    trim: true,
  },
});

const Subcategories = mongoose.model("Subcategories", subCategorySchema);
export default Subcategories;
