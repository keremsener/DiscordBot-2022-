# 🤖 DiscordBot-2022: Çok Amaçlı Kapsamlı Discord Botu

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Discord.js](https://img.shields.io/badge/Discord.js-5865F2?style=for-the-badge&logo=discord&logoColor=white)
![SQL](https://img.shields.io/badge/SQL-003B57?style=for-the-badge&logo=sqlite&logoColor=white)

> **Geliştirici Notu (2022):** > *Bu proje, 2022 yılında yazılım dünyasına yeni yeni adım attığım, kodlamayı keşfetmeye başladığım dönemde geliştirdiğim bir Discord botudur. O zamanların heyecanıyla; içerisinde kendi veritabanı mimarisi olan bir ekonomi sisteminden, e-ticaret (Trendyol) entegrasyonlarına, hatta özel olarak tasarladığım bir "Ülke Oyunu"na kadar aklıma gelen birçok eğlenceli ve işlevsel fikri koda döktüm. Benim için yeri ayrıdır, kodlama serüvenimin ilk büyük adımlarından biridir.*

---

### 🌟 Öne Çıkan Özellikler

Bu bot sıradan bir moderasyon botundan çok daha fazlasıdır. Kendi içinde modüllere ayrılmış devasa bir sistemdir:
- **Kapsamlı Ekonomi Sistemi:** Hesap açma, günlük ödüller, para transferi ve küresel sıralama.
- **Gelişmiş Moderasyon:** Otomatik kayıt, susturma (mute), sesli kanal (AFK) yönetimi ve spam korumaları.
- **Özel "Ülke Oyunu" Modülü:** Oyuncuların farklı ülkeleri (Rusya, İtalya, Fransa vb.) yönettiği veya etkileşime girdiği eşsiz bir mini oyun.
- **Dış API Entegrasyonları:** Doğrudan Discord üzerinden YouTube araması ve Trendyol ürün sorgulama yeteneği.

---

## 🚀 Kurulum ve Çalıştırma

Botu kendi sunucunuzda çalıştırmak için aşağıdaki adımları izleyebilirsiniz.

### Ön Koşullar
- [Node.js](https://nodejs.org/) (V16 veya üzeri tavsiye edilir)
- Bir Discord Bot Token'ı ([Discord Developer Portal](https://discord.com/developers/applications) üzerinden alınmalı)

### Adımlar

1. **Repoyu Klonlayın:**
   ```bash
   git clone [https://github.com/keremsener/DiscordBot-2022-.git](https://github.com/keremsener/DiscordBot-2022-.git)
   cd DiscordBot-2022-
2. **Gerekli Paketleri Yükleyin:**
   ```
   npm install
   ```
3. **Yapılandırma:**
   Ana dizinde bot token'ınızı ve veritabanı bilgilerinizi gireceğiniz bir .env (veya config.json / custom.js) dosyası oluşturun ve gerekli bilgileri doldurun.
4. **Botu Başlatın:**
   ```
   node index.js
   ```
     *Bot başarıyla başladığında konsolda giriş yaptığına dair bir mesaj göreceksiniz.*

# 🛠️ Komutlar ve Kullanım
Bot, farklı kategorilerde onlarca komut sunar. İşte komutların detaylı listesi:

### 💰 Ekonomi & RPG Sistemi
Botun en iddialı olduğu alan. Kendi bakiyenizi yönetip oyunlar oynayabilirsiniz.

hesap-kur: Ekonomi sistemine dahil olmak için kendinize bir banka hesabı oluşturursunuz.

günlük: Her 24 saatte bir günlük hediye paranızı (maaşınızı) alırsınız.

para-gönder: Cüzdanınızdaki parayı sunucudaki başka bir kullanıcıya transfer edersiniz.

kumar: Bakiyenizi riske atarak şansınızı dener ve paranızı katlamaya çalışırsınız.

sıralama: Ekonomi sistemindeki en zengin kullanıcıların yer aldığı küresel veya sunucu bazlı liderlik tablosunu gösterir.

### 🌍 Ülke Oyunu Modülü
Özel olarak geliştirilmiş, ülke yönetimi ve kaynak etkileşimi tabanlı mini oyun.

günlükülke: Ülke oyunu için günlük durumunuzu ve ödüllerinizi kontrol edersiniz.

rusya, italya, fransa, almanya, ingiltere: İlgili ülkelere özel operasyonlar, etkileşimler veya durum bilgisi almak için kullanılan özel komutlar.

### 🛡️ Moderasyon ve Sunucu Yönetimi
kayıt-sistemi: Sunucuya yeni katılan üyeler için gelişmiş (isim, yaş, cinsiyet vb.) kayıt sistemini ayarlar.

moderasyon: Genel moderasyon paneli ve araçlarını gösterir.

ban: Sunucu kurallarını ihlal eden bir kullanıcıyı sunucudan yasaklar.

mute-sistemi: Belirlenen kullanıcıyı metin veya ses kanallarında susturur. Ayarlamaları yapılandırır.

ses-afk: Ses kanallarında uzun süre hareketsiz kalan kullanıcıları tespit eder ve AFK sistemini yönetir.

mesajtekrarlakapat: Sunucuda flood/spam yapılmasını (aynı mesajın sürekli tekrarlanmasını) engeller.

### 🎮 Eğlence & Etkileşim
tkm: Bota veya başka bir kullanıcıya karşı klasik Taş-Kağıt-Makas oyunu oynarsınız.

oy: Sunucuda evet/hayır tarzı oylamalar (anketler) başlatmanızı sağlar.

surelimesaj: Belirlediğiniz bir sürenin sonunda botun sizin adınıza otomatik bir mesaj göndermesini sağlar.

sunucubilgi: Bulunduğunuz sunucunun istatistiklerini (üye sayısı, kuruluş tarihi, kanallar vb.) detaylıca listeler.

### 🔗 Entegrasyonlar
youtube-arama: Discord'dan çıkmadan YouTube üzerinde arama yapar ve ilk sonucu videoyla birlikte sohbete atar.

trendyol: Trendyol üzerinde ürün araması yapar ve ürün bilgilerini Discord kanalına yansıtır.

### 🆘 Yardım Menüsü
Botun sahip olduğu tüm bu özellikleri ve çok daha fazlasını Discord üzerinden anlık olarak görmek için sunucuda Yardım komutunu (genellikle !yardım veya bota etiket atarak) kullanabilirsiniz. Yardım menüsü size kategorize edilmiş, göze hitap eden (Embed mesajlarla tasarlanmış) bir arayüz sunar ve hangi komutun nasıl parametreler aldığını detaylıca gösterir.

### 📜 Lisans
Bu proje LICENCE.md dosyası altında belirtilen lisans koşullarıyla paylaşılmıştır. İstediğiniz gibi inceleyebilir, kendi projeleriniz için ilham alabilir veya çatallayabilirsiniz (fork).
