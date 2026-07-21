require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Debug
console.log("MONGO_URI VALUE ", process.env.MONGO_URI);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("DB Error:", err));

// Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String
});

const Contact = mongoose.model("Contact", contactSchema);

// Nodemailer Transporter Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const HR_EMAIL = process.env.EMAIL_USER;

// Helper function to send email notification to HR and confirmation to User
const sendEmails = async (res, userEmail, userName, hrSubject, hrBody, userSubject, userBody, successMessage) => {
  try {
    // 1. Send notification to HR
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: HR_EMAIL,
      subject: hrSubject,
      text: hrBody
    });

    // 2. Send confirmation to User
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: userEmail,
      subject: userSubject,
      text: userBody
    });

    res.status(200).json({ message: successMessage });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
};

// 1. Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  try {
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    console.log("Saved to DB");

    const hrSubject = `New Contact Query: ${subject || 'General Inquiry'}`;
    const hrBody = `You have received a new contact submission.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;
    
    const userSubject = 'We have received your message - WhiteCircle Group';
    const userBody = `Hi ${name},\n\nThank you for reaching out to us. We have received your message and our team will get back to you shortly.\n\nBest regards,\nWhiteCircle Group`;

    await sendEmails(res, email, name, hrSubject, hrBody, userSubject, userBody, 'Saved to MongoDB and emails sent. Thank you for reaching out!');
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Database or Email error ❌' });
  }
});

// 2. Book Consultation Endpoint
app.post('/api/book', async (req, res) => {
  const { name, email, phone, company, date, service, requirements } = req.body;

  if (!name || !email || !service || !date) {
    return res.status(400).json({ error: 'Name, email, service, and date are required.' });
  }

  const hrSubject = `New Consultation Booking: ${service} from ${name}`;
  const hrBody = `New consultancy booking received.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nService: ${service}\nPreferred Date: ${date}\nRequirements: ${requirements || 'None'}`;
  
  const userSubject = 'Consultation Booking Confirmation - WhiteCircle Group';
  const userBody = `Hi ${name},\n\nYour consultation booking for "${service}" has been received. Our team will review your request and contact you to confirm the time.\n\nBest regards,\nWhiteCircle Group`;

  await sendEmails(res, email, name, hrSubject, hrBody, userSubject, userBody, 'Your consultation has been booked successfully! We will contact you soon.');
});

// 3. Careers Apply Endpoint
app.post('/api/apply', async (req, res) => {
  const { name, email, phone, position, experience, portfolio, whyHire } = req.body;

  if (!name || !email || !position) {
    return res.status(400).json({ error: 'Name, email, and position are required.' });
  }

  const hrSubject = `New Job Application: ${position} by ${name}`;
  const hrBody = `New application received from Careers page.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nPosition: ${position}\nExperience: ${experience} years\nPortfolio/LinkedIn: ${portfolio || 'N/A'}\nWhy hire: ${whyHire || 'N/A'}`;
  
  const userSubject = `Application Received: ${position} - WhiteCircle Group`;
  const userBody = `Hi ${name},\n\nThank you for applying for the ${position} position at WhiteCircle Group. We have received your application and our HR team will review it. If your profile matches our requirements, we will reach out for the next steps.\n\nBest regards,\nWhiteCircle Group HR Team`;

  await sendEmails(res, email, name, hrSubject, hrBody, userSubject, userBody, 'Application submitted successfully! Please check your email.');
});

// ✅ SERVE FRONTEND (IMPORTANT)
const __dirnamePath = path.resolve();

app.use(express.static(path.join(__dirnamePath, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirnamePath, "../client/dist/index.html"));
});

// ✅ START SERVER (MUST BE LAST)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});