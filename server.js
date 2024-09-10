//server.js 
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files securely
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint for downloading the Resume
app.get('/download/resume', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'cv', 'finnm_resume.pdf');
  res.download(filePath, 'finnm_resume.pdf', (err) => {
    if (err) {
      res.status(500).send('Error downloading the file.');
    }
  });
});

// Endpoint for downloading the CV
app.get('/download/cv', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'cv', 'finnm_cv.pdf');
  res.download(filePath, 'finnm_cv.pdf', (err) => {
    if (err) {
      res.status(500).send('Error downloading the file.');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
