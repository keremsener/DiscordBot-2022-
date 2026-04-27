module.exports = {
  name:"seç-italya",
  code:`
$title[BAŞARILI!]
$description[🟢 Ülke Başarıyla Seçildi.Ne Yapmak İstediğini Belirle. ⚪
$image[https://ulkelerbayraklar.com/wp-content/uploads/2019/12/italya-bayragi.jpg]]
$footer[İtalyayı Seçen Kullanıcı: $username;$authorAvatar]
$color[RED]
$onlyIf[ulke!=açık;Bu Komutu Kullanabilmek İçin Oyunu Başlatmanız Gerek!]
$onlyIf[ulkem==açık;Bu Ülke Daha Önce Başka Biri Tarafından Seçilmiş.]
`
}