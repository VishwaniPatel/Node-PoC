import Products from "../models/productsModel";

// Get all products
export const getAllProducts = async (req: any, res: any) => {
  try {
    const products = await Products.find();

    res.status(200).json({
      status: "success",
      results: products.length,
      data: {
        products,
      },
    });
  } catch (err: any) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Create a new product
export const createProduct = async (req: any, res: any) => {
  try {
    const newProduct = await Products.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        products: newProduct,
      },
    });
  } catch (err: any) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
