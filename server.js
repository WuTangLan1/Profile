// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/download/resume', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'cv', 'finnm_resume.pdf');
  res.download(filePath, 'finnm_resume.pdf', (err) => {
    if (err) {
      res.status(500).send('Error downloading the file.');
    }
  });
});

app.get('/download/cv', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'cv', 'finnm_cv.pdf');
  res.download(filePath, 'finnm_cv.pdf', (err) => {
    if (err) {
      res.status(500).send('Error downloading the file.');
    }
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
