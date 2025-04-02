const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let ziyaretSayaci = 0;

// 📋 Loglama Middleware'i
app.use((req, res, next) => {
  const zaman = new Date().toLocaleString();
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log(`[${zaman}] IP: ${ip} → ${req.method} ${req.url}`);
  next();
});

// Ana sayfa
app.get('/', (req, res) => {
  ziyaretSayaci++;
  res.send(`Merhaba Zeynep! İlk sunucun çalışıyor 🎉🦥<br>Bu sayfa ${ziyaretSayaci} kez ziyaret edildi.`);
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});
