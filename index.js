const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let ziyaretSayaci = 0;

app.get('/', (req, res) => {
  ziyaretSayaci++;

  // IP ve zaman bilgisi loglansın
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const now = new Date().toString();
  console.log(`IP: ${ip} - Date: ${now}`);

  res.send(`Merhaba Zeynep! İlk sunucun çalışıyor 🎉🦥<br>Bu sayfa ${ziyaretSayaci} kez ziyaret edildi.`);
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});
