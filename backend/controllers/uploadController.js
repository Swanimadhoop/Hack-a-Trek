import cloudinary from "../config/cloudinaryConfig.js";
import streamifier from "streamifier";

export const uploadProject = async (req, res) => {
    try {
        if (!req.files || !req.files.projectFile) {
            return res.status(400).json({ message: 'No file uploaded.' });
        }

        const uploadStream = cloudinary.v2.uploader.upload_stream(
            { resource_type: "auto" },
            (error, result) => {
                if (error) {
                    return res.status(500).json({ message: 'Upload failed', error });
                }
                return res.status(200).json({ message: 'Upload successful', url: result.secure_url });
            }
        );

        // Convert the file data to a stream and pipe it into the Cloudinary upload stream
        streamifier.createReadStream(req.files.projectFile.data).pipe(uploadStream);
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).json({ message: 'An error occurred', error });
    }
};
