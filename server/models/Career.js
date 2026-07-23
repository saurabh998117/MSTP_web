const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  id: { type: String }, // Job ID (e.g. 101, 102)
  title: { type: String, required: true },
  department: { type: String, required: true },
  type: { type: String, required: true }, // Full-time, Internship, etc.
  experience: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  primarySkills: { type: String },
  secondarySkills: { type: String },
  overview: { type: String },
  eligibility: { type: String },
  status: { type: String, default: 'Published' } // Published or Draft
}, { timestamps: true });

module.exports = mongoose.model('Career', careerSchema);
