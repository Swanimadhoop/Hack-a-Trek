import Application from '../models/Application.js';

// Controller for registering an application
export const registerApplication = async (req, res, next) => {
  try {
    const { teamName, teamLeaderName, leaderEmail, members, hackathonIdea } = req.body;

    // Validate that all fields are present
    if (!teamName || !teamLeaderName || !leaderEmail || !hackathonIdea) {
      return res.status(400).json({ message: 'All fields are required!' });
    }

    // Prepare team members array, starting with the team leader
    const teamMembers = [
      { name: teamLeaderName, email: leaderEmail },  // Team leader as first member
      ...members,  // Other members
    ];

    // Create a new application instance
    const newApplication = new Application({
      teamName,
      members: teamMembers,
      hackathonIdea,
    });

    // Save to database
    await newApplication.save();

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully!',
    });
  } catch (error) {
    next(error);
  }
};