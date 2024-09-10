// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

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

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
