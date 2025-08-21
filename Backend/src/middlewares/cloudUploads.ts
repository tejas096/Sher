import { Request } from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary";

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => ({
    folder: "myapp_uploads",
    format: file.mimetype.split("/")[1],
    public_id: `${file.originalname.split(".")[0]}-${Date.now()}`,
  }),
});

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  const allowedTypes = ["image/jpeg", "image/webp", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only .jpg, .webp, .jpeg, and .png files are allowed!"));
  }
};

export const cloudUpload = multer({
  storage,
  fileFilter,
  limits: { fieldSize: 2 * 1024 * 1024 },
});
