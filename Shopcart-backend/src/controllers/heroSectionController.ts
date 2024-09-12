import fs from "fs";
import path from "path";
import HeroSection from "../models/heroSectionModel";

export const getHeroSection = async (req: any, res: any) => {
  try {
    const data = await HeroSection.find();

    // Send response
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

export const createHeroSectionData = async (req: any, res: any) => {
  try {
    const { title, subtitle, imageUrl } = req.body;

    if (!imageUrl) {
      return res.status(400).json({
        status: "fail",
        message: "Image URL is required.",
      });
    }

    // Save the base64 image to the server
    const base64Data = imageUrl.replace(/^data:image\/[a-z]+;base64,/, "");
    const dirPath = path.join(__dirname, "../../public/images");
    const filePath = path.join(dirPath, `${Date.now()}.png`);

    // Check if the directory exists, if not, create it
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    fs.writeFileSync(filePath, base64Data, "base64");

    const newData = await HeroSection.create({
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

export const deleteHeroSectionData = async (req: any, res: any) => {
  try {
    const banner = await HeroSection.findByIdAndDelete(req.params.id);
    if (!banner) {
      return res.status(404).json({
        status: "fail",
        message: "Herosection image not found.",
      });
    }

    // // Remove the image file from the server
    // const filePath = path.join(imageDir, banner.imageUrl);
    // if (fs.existsSync(filePath)) {
    //   fs.unlinkSync(filePath);
    // }

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
