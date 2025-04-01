const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Loglama middleware'i
app.use((req, res, next) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const now = new Date().toLocaleString();
  console.log(`[${now}] Ziyaretçi IP: ${ip}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Merhaba Zeynep! İlk sunucun çalışıyor 🎉');
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});
