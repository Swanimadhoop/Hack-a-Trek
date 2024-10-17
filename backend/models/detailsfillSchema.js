import mongoose from 'mongoose';
import validator from 'validator';

// Define the Hackathon schema
const detailsfillSchema = new mongoose.Schema({
  lastDayToApply: {
    type: Date,
    required: false,
  },
  dateOfEvent: {
    type: Date,
    required: false,
  },
  modeOfEvent: {
    type: String,
    enum: ['online', 'offline'],
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps

// Create the Hackathon model
export const detailsfill = mongoose.model('detailsfill', detailsfillSchema);


