module.exports = {
  name:"seç-ingiltere",
  code:`
$title[BAŞARILI!]
$description[🔴 Ülke Başarıyla Seçildi.Ne Yapmak İstediğini Belirle. ⚪
$image[https://selimogluteknik.com/img/p/1/35032-large_default.jpg]]
$footer[İngiltereyi Seçen Kullanıcı: $username;$authorAvatar]
$color[RED]
$onlyIf[ulke!=açık;Bu Komutu Kullanabilmek İçin Oyunu Başlatmanız Gerek!]
$onlyIf[ulkem==açık;Bu Ülke Daha Önce Başka Biri Tarafından Seçilmiş.]
`
}