const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let ziyaretSayaci = 0;

// IP, zaman ve user-agent loglama middleware’i
app.use((req, res, next) => {
  const zaman = new Date().toString();
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const userAgent = req.headers['user-agent'];

  console.log(`IP: ${ip} - Date: ${zaman} → ${req.method} ${req.url}`);
  console.log(`User-Agent: ${userAgent}`);
  next();
});

app.get('/', (req, res) => {
  ziyaretSayaci++;
  res.send(`Merhaba Zeynep! İlk sunucun çalışıyor 🎉🦥<br>Bu sayfa ${ziyaretSayaci} kez ziyaret edildi.`);
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});
