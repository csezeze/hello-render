const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const now = new Date().toLocaleString();
  const userAgent = req.headers['user-agent'];

  console.log(`[${now}] IP: ${ip} | Agent: ${userAgent} → ${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Merhaba Zeynep! İlk sunucun çalışıyor 🎉');
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});
