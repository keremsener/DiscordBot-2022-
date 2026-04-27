module.exports = {
  name:"seç-custom",
  code:`
$tilte[TALEP ALINDI!]
$description[**$message[1]** Adlı Ülkeniz Başarıyla Oluşturuldu.Ülkeniz İki Veya Daha Fazla Kelimeden Oluşuyorsa Birleşik veya Sadece Öz Adını Yazınız**
örnek:
\`Amerika Birleşik Devletleri❌
Amerika/ABD ✅\`]
$onlyIf[ulke!=açık;Bu Komutu Kullanabilmek İçin Oyunu Başlatmanız Gerek!]
`
}