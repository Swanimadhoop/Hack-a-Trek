// models/resultSchema.js

import mongoose from 'mongoose';

const resultSchema = new mongoose.Schema({
  firstPlace: {
    type: String,
    required: true,
  },
  secondPlace: {
    type: String,
    required: true,
  },
  thirdPlace: {
    type: String,
    required: true,
  },
}, { timestamps: true });


export const Result = mongoose.model('Result', resultSchema);

