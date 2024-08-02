const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'welcome.html'));
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// Menambahkan middleware untuk melakukan redirect
app.use((req, res, next) => {
  if (req.path === '/' && req.method === 'GET') {
    // Jika request adalah GET ke '/', kirim file welcome.html
    res.sendFile(path.join(__dirname, 'public', 'welcome.html'));
    
    // Setelah 5 detik, redirect ke '/home'
    setTimeout(() => {
      res.redirect('/home');
    }, 5000);
  } else {
    next();
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});