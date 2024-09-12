import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    // required: [true, "A category must have a name"],
  },
  categoryBackground: { type: String },
});

const Categories = mongoose.model("Categories", categorySchema);
export default Categories;
