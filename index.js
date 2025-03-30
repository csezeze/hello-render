const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Merhaba Zeynep! İlk sunucun çalışıyor 🎉');
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});
