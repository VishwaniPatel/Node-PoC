import PromotionalBanner from "../models/promotionalBannerModel";
import fs from "fs";
import path from "path";

export const getPromotionalBanner = async (req: any, res: any) => {
  try {
    const data = await PromotionalBanner.find();

    // send response
    res.status(200).json({
      status: "success",
      results: data.length,
      data: {
        data,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const createPromotionalBanner = async (req: any, res: any) => {
  try {
    const { title, subtitle, imageUrl } = req.body;

    // Save the base64 image to the server
    const base64Data = imageUrl.replace(/^data:image\/[a-z]+;base64,/, "");
    const dirPath = path.join(__dirname, "../../public/images");
    const filePath = path.join(dirPath, `${Date.now()}.png`);

    // Check if the directory exists, if not, create it
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    fs.writeFileSync(filePath, base64Data, "base64");

    const newData = await PromotionalBanner.create({
      title,
      subtitle,
      imageUrl: filePath, // Save the file path to the database
    });

    res.status(201).json({
      status: "success",
      data: newData,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const deletePromotionalBanner = async (req: any, res: any) => {
  try {
    await PromotionalBanner.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
