import { hackathon } from '../models/hackathonSchema.js';
import { detailsfill } from '../models/detailsfillSchema.js';

// Function to create a new hackathon
export const createHackathon = async (req, res) => {
  try {
    const { orgName, orgEmail, hackathonName } = req.body;

    // Check if all required fields are provided
    if (!orgName || !orgEmail || !hackathonName) {
      return res.status(400).json({ message: 'All fields are required!' });
    }

    // Create new hackathon entry
    const newHackathon = await hackathon.create({
      orgName,
      orgEmail,
      hackathonName,
    });

    // Respond with the newly created hackathon ID
    res.status(201).json({ _id: newHackathon._id }); // Return the ID for further updates
  } catch (error) {
    console.error(error);  // Log the error to help with debugging
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

// Function to update existing hackathon details
// Function to update existing hackathon details
export const updateHackathonDetails = async (req, res) => {
  try {
    const { _id, lastDayToApply, dateOfEvent, modeOfEvent, description } = req.body;

    // Find the hackathon by ID
    const existingHackathon = await hackathon.findById(_id);

    // Check if the hackathon exists
    if (!existingHackathon) {
      return res.status(404).json({ message: 'Hackathon not found!' });
    }

    // Update the details using detailsfill schema
    const updatedDetails = await detailsfill.create({
      lastDayToApply,
      dateOfEvent,
      modeOfEvent,
      description
    });

    // Attach updated details to the hackathon
    existingHackathon.details = updatedDetails._id; // Assuming you have a details field in the hackathon schema to store detailsfill ID

    // Save the updated hackathon
    const updatedHackathon = await existingHackathon.save();

    // Respond with the updated hackathon
    res.status(200).json(updatedHackathon);
  } catch (error) {
    console.error(error);  // Log the error to help with debugging
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

// Function to publish hackathon results
export const publishHackathonResults = async (req, res) => {
  try {
    const { _id, firstPlace, secondPlace, thirdPlace } = req.body;

    // Find the hackathon by ID
    const existingHackathon = await hackathon.findById(_id);

    if (!existingHackathon) {
      return res.status(404).json({ message: 'Hackathon not found!' });
    }

    // Create new result entry
    const newResult = await Result.create({
      firstPlace,
      secondPlace,
      thirdPlace,
    });

    // Attach the result to the hackathon
    existingHackathon.results = newResult._id;
    await existingHackathon.save();

    res.status(200).json({ message: 'Results published successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};
