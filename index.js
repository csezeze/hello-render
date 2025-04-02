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

// Ziyaret sayacı (sadece index.html için)
app.use((req, res, next) => {
  if (req.path === '/index.html') {
    ziyaretSayaci++;
    console.log(`Ziyaret Sayısı: ${ziyaretSayaci}`);
  }
  next();
});

// public klasörünü servis et
app.use(express.static('public'));

// Ana sayfa yönlendirmesi (isteyen '/' ile girerse index.html yollansın)
app.get('/', (req, res) => {
  ziyaretSayaci++;
  console.log(`Bu sayfa ${ziyaretSayaci} kez ziyaret edildi.`);
  res.sendFile(__dirname + '/public/index.html');
});

app.use(express.urlencoded({ extended: true })); // Form verisini alabilmek için

app.post('/cevap', (req, res) => {
  const secilen = req.body.secenek;
  if (secilen === 'ankara') {
    res.send('✅ Doğru cevap! Ankara Türkiye\'nin başkentidir.');
  } else {
    res.send('❌ Maalesef yanlış cevap. Doğru cevap Ankara olacaktı.');
  }
});


app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});
