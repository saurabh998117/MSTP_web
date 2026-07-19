require('dotenv').config();

console.log("MONGO_URI VALUE ", process.env.MONGO_URI);
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected "))
.catch(err => console.log("DB Error:", err));

// Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String
});

const Contact = mongoose.model("Contact", contactSchema);

//  API (NOW SAVES DATA)
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  try {
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    console.log("Saved to DB ");

    res.status(200).json({ message: 'Saved to MongoDB ' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Database error ❌' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});