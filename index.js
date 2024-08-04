const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <meta http-equiv="refresh" content="5;url=/home">
        <title>Welcome</title>
      </head>
      <body>
        <h1>Welcome!</h1>
        <p>You will be redirected to home page in 5 seconds...</p>
      </body>
    </html>
  `);
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});