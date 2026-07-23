const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  image: { type: String }, // Base64 or URL
  caseStudyTitle: { type: String },
  description: { type: String },
  challengeDescription: { type: String },
  challenges: [{ title: String }],
  tools: [{ name: String, icon: String }], // icon can be Base64
  testimonial: {
    text: String,
    author: String,
    role: String,
    avatar: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Portfolio', portfolioSchema);
