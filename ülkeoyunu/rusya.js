module.exports = {
  name:"seç-rusya",
  code:`
$title[BAŞARILI!]
$description[🔵 Ülke Başarıyla Seçildi.Ne Yapmak İstediğini Belirle. ⚪
$image[hthttps://www.kisa.link/PNSG]]
$footer[Rusyayı Seçen Kullanıcı: $username;$authorAvatar]
$color[RED]
$onlyIf[ulke!=açık;Bu Komutu Kullanabilmek İçin Oyunu Başlatmanız Gerek!]
$onlyIf[ulkem==açık;Bu Ülke Daha Önce Başka Biri Tarafından Seçilmiş.]
`
}