const mongoose = require('mongoose');

const siteSettingsSchema = new mongoose.Schema({
  privacyPolicy: { type: String },
  aboutUsText: { type: String }, // For the text shown inside Career expanded view or elsewhere
  contactEmail: { type: String },
  contactPhone: { type: String },
  contactAddress: { type: String },
  logoUrl: { type: String }, // Base64 string or URL
  socialLinks: {
    instagram: { type: String },
    linkedin: { type: String },
    whatsapp: { type: String },
    twitter: { type: String },
    facebook: { type: String }
  }
}, { timestamps: true });

module.exports = mongoose.model('SiteSettings', siteSettingsSchema);
