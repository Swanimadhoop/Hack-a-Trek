import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const applicationSchema = new mongoose.Schema({
  teamName: { type: String, required: true },
  members: [memberSchema],  // Array of all team members (including leader)
  hackathonIdea: { type: String, required: true },
});

const Application = mongoose.model('Application', applicationSchema);
export default Application;
