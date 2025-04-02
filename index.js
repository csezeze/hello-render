const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let ziyaretSayaci = 0;

// Loglama middleware'i
app.use((req, res, next) => {
  const zaman = new Date().toString();
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const userAgent = req.headers['user-agent'];
  console.log(`IP: ${ip} - Date: ${zaman} → ${req.method} ${req.url}`);
  console.log(`User-Agent: ${userAgent}`);
  next();
});

// Anasayfa
app.get('/', (req, res) => {
  ziyaretSayaci++;
  res.send(`Merhaba Zeynep! İlk sunucun çalışıyor 🎉🦥<br>Bu sayfa ${ziyaretSayaci} kez ziyaret edildi.`);
});

// Quiz sorusu
const quizSoru = {
  soru: "Türkiye'nin başkenti neresidir?",
  secenekler: ["İstanbul", "Ankara", "İzmir", "Bursa"],
  dogruCevap: "Ankara"
};

// Soru gösterme
app.get('/soru', (req, res) => {
  res.json({
    soru: quizSoru.soru,
    secenekler: quizSoru.secenekler
  });
});

// Cevap kontrol etme
app.get('/cevap', (req, res) => {
  const verilen = req.query.verilen;

  if (!verilen) {
    return res.send("Lütfen bir cevap gönderin. Örn: /cevap?verilen=Ankara");
  }

  if (verilen.trim().toLowerCase() === quizSoru.dogruCevap.toLowerCase()) {
    res.send("Doğru cevap! 🎉");
  } else {
    res.send(`Yanlış cevap! Doğrusu: ${quizSoru.dogruCevap}`);
  }
});

// Sunucu başlat
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});
