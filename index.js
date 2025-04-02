const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let ziyaretSayaci = 0;

// IP ve zaman loglama
app.use((req, res, next) => {
  const zaman = new Date().toString();
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const userAgent = req.headers['user-agent'];
  console.log(`[${zaman}] IP: ${ip} - Agent: ${userAgent} -> ${req.method} ${req.url}`);
  next();
});

// public klasörünü aç
app.use(express.static('public'));

// Ana sayfa
app.get('/', (req, res) => {
  ziyaretSayaci++;
  console.log(`Bu sayfa ${ziyaretSayaci} kez ziyaret edildi.`);
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});
