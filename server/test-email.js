require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

transporter.verify(function(error, success) {
  if (error) {
    console.log("CONNECTION ERROR:");
    console.log(error);
  } else {
    console.log("SUCCESS: Server is ready to take our messages");
  }
});
