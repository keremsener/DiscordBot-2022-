module.exports = {
  name:"itiraf-kapat",
  code:`
  $title[BAŞARIYLA GERÇEKLEŞTİRİLDİ!]
  $description[İtiraf Oyununu Başarıyla Kapatıldı.Tekar Açmak İçin, \`ş!itiraf-başlat\` Yazın.]
  $footer[İtiraf Oyunu Kapatan Kişi: $username,$uathorAvatar]
  $color[RED]
  $onlyIf[$getServerVar[itiraf]!=açık;**BU ÖZELLİK ZATEN KAPALI!]
  $onlyPerms[admin;{description:Bunun İçin Yetkin Yok}{color:RED}]

  `
}