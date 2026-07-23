const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  icon: { type: String }, // Base64 string or URL
  description: { type: String, required: true },
  category: { type: String }, // e.g., 'Foundation', 'Innovation'
  features: [{
    title: String,
    desc: String
  }],
  processSteps: [{
    title: String
  }],
  technologies: [String]
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);
