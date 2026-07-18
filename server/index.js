const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mock Contact endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  // TODO: Save to MongoDB when DB is provided
  console.log('Received new contact submission:', { name, email, subject, message });

  res.status(200).json({ message: 'Thank you for reaching out! We will get back to you soon.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
