import {hackathon} from "../models/hackathonSchema.js";

export const createHackathon = async (req, res) => {
  try {
    const { orgName, orgEmail, hackathonName } = req.body;
    
    // Check if all required fields are provided
    if (!orgName || !orgEmail || !hackathonName) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // Create new hackathon entry
    const newHackathon = await hackathon.create({
      orgName,
      orgEmail,
      hackathonName
    });

    res.status(201).json(newHackathon);
  } catch (error) {
    console.error(error);  // Log the error to help with debugging
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};
