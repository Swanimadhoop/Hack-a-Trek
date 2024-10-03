import mongoose from 'mongoose';
import validator from 'validator';

// Define the Hackathon schema
const hackathonSchema = new mongoose.Schema({
  orgName: {
    type: String,
    required: [true,"please provide your organisation name"],
  },
  orgEmail: {
    type:String,
    required:[true,"Please provide your organisation email!"],
    validate:[validator.isEmail,"Please provide a valid email!"],
  },
  hackathonName: {
    type: String,
    required: [true,"please provide your hackathon name"],
  },
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps

// Create the Hackathon model
export const hackathon = mongoose.model('hackathon', hackathonSchema);


