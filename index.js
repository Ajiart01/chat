const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Menghapus route handler untuk '/'

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// Middleware untuk menangani redirect
app.use((req, res, next) => {
  if (req.path === '/' && req.method === 'GET') {
    res.sendFile(path.join(__dirname, 'public', 'welcome.html'), (err) => {
      if (err) {
        next(err);
      } else {
        // Setelah file terkirim, set header untuk redirect
        res.set('Refresh', '5; url=/home');
      }
    });
  } else {
    next();
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});