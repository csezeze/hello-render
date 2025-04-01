const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let ziyaretSayaci = 0;

app.get('/', (req, res) => {
  ziyaretSayaci++;
  res.send(`Merhaba Zeynep! İlk sunucun çalışıyor 🎉🦥<br>Bu sayfa ${ziyaretSayaci} kez ziyaret edildi.`);
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});
