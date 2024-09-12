import mongoose from "mongoose";

// Schema for product images
const productImageSchema = new mongoose.Schema({
  imageName: { type: String }, // Assuming each image should have a name
  inputImage: { type: String }, // Base64 string or URL for the image
});

const productSchema = new mongoose.Schema(
  {
    productName: { type: String },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    subcategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory",
    },
    productPrice: { type: Number },
    offerPrice: { type: Number }, // Can be optional
    productDescription: { type: String },
    productQuantity: { type: Number },
    productBrand: { type: String },
    productImage: [productImageSchema], // Array of images
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

// Create and export the Product model
const Product = mongoose.model("Product", productSchema);

export default Product;
