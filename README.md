#  Hello Render – Zeynep'in İlk Sunucusu 

Merhaba!  
Ben Zeynep ve bu benim ilk **canlı web sunucum**!  
Bu repo, Node.js ve Express.js kullanılarak geliştirdiğim, Render üzerinde yayınladığım mini bir test projesidir. 🌍✨

## https://zeynep-node.onrender.com/ bağlantıya gittiğinizde sizi mini bir quiz karşılayacaktır.

> ⚠️ Not: Render ücretsiz planında sunucu belli bir süre aktif kullanılmazsa uyku moduna geçer.  
> Bu yüzden bağlantıya tıkladığınızda sayfa hemen yüklenmeyebilir. Lütfen birkaç saniye bekleyin. 🙂

## ⚙️ Uygulamamın Çalışma Şekli (Kısaca)

Bu projem Node.js ve Express.js kullanılarak geliştirilmiş basit bir web uygulamasıdır. Temel işleyiş şu şekildedir:

- `public` klasöründeki statik HTML dosyaları (`index.html`) tarayıcıya sunulur.
- Ana sayfa her ziyaret edildiğinde, bir sayaç artar ve konsola yazılır.
- Kullanıcıdan gelen her HTTP isteği için:
  - Zaman damgası,
  - IP adresi,
  - Tarayıcı bilgisi (User-Agent),
  konsola loglanır.
- `/cevap` adlı POST endpoint’i, formdan gelen veriyi alır ve doğru/yanlış yanıtı belirleyerek ekrana basar.

Projem Render platformu üzerinde canlı olarak host edilmektedir.
Canlıya almak, uygulamamı sadece kendi bilgisayarımda değil, internette herkesin erişebileceği şekilde yayınlamak demek. Böylece biri bağlantıya tıkladığında, sunucum çalışıyor ve sayfam açılıyor.


## 📦 Kullanılan Teknolojiler

- Node.js    : JavaScript kodlarının sunucu tarafında çalıştırılmasını sağlar.
- Express.js : HTTP sunucusu kurmak ve istekleri yönetmek için kullanılan web framework'üdür.
- Git + GitHub
- Render (Deployment için) : Uygulamanın canlıya alınmasını sağlayan ücretsiz bulut servisidir.
- HTML/CSS : Kullanıcı arayüzünü oluşturmak için temel web teknolojileridir

## 📚 Bu Projem ile,

- Express.js ile web sunucusu kurmayı ve yapılandırmayı,
- Statik dosyaların (`index.html`) nasıl servis edildiğini,
- Formlardan gelen verilerin nasıl alındığını (`POST` isteği),
- IP, tarayıcı bilgisi ve zaman bilgisini loglamayı,
- Ziyaret sayacı oluşturarak sunucu tarafında veri tutmayı,
- Git ile proje versiyonlamayı ve GitHub'a göndermeyi,
- Render üzerinde projeyi yayına almayı ve hata çözümlemeyi (debugging) öğrendim.

---


Zeynep Özkan • Ankara Medipol Üniversitesi  
csezeze.github.io
