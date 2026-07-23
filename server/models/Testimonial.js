const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  author: { type: String, required: true },
  role: { type: String, required: true },
  content: { type: String, required: true },
  rating: { type: Number, default: 5 },
  avatar: { type: String } // Base64 or URL
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', testimonialSchema);
