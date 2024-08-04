const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware untuk menyajikan file statis dari folder public
app.use(express.static(path.join(__dirname, 'public')));

// Rute untuk welcome.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'welcome.html'));
});

// Rute untuk home.html
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// Mulai server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
