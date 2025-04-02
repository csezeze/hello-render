const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let ziyaretSayaci = 0;

// IP ve zaman loglama middleware’i
app.use((req, res, next) => {
  const zaman = new Date().toString(); // Uzun ve detaylı format
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log(`IP: ${ip} - Date: ${zaman} → ${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  ziyaretSayaci++;
  res.send(`Merhaba Zeynep! İlk sunucun çalışıyor 🎉🦥<br>Bu sayfa ${ziyaretSayaci} kez ziyaret edildi.`);
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});
