module.exports = {
  name:"botlist",
  code:`
$color[BLUE]

$addField[ş!başvurukanal #kanal;Etiketlenen Kanal Hariç Hiç Biryerde ş!botekle Kullanılamaz;yes]
$addField[ş!botekle <BOT ID> <PREFIX>;Ayarlar Tamamsa Botunuzu Ekletebilirsiniz;yes]
$addField[ş!botlog #kanal;Etiketlenen Kanala Bot Eklenirse Bildirim Atar;yes]
$addField[ş!gelenbot #kanal;Etiketlenen Kanala Botun 0 ve 8 Permli Davet Linkini Atar;yes]
$addField[ş!onay <Kişi ID>;Kişinin ID'sini Yazarak Onay Red Log Kanalına Bildirim Atar;yes]
$addField[ş!reddet <Kişi ID> <SEBEP>;Kişinin ID'si Ve Sebebi Belirterek Onay Red Log'a Bildirim Atar;yes]
$addField[ş!redonay #kanal;Etiketlenen Kanala Reddetme Ve Onaylama Kanalı Ayarlar;yes]
$addField[ş!tester @rol;Etiketlenen Rolde !onay !red Komutlarını Kullanır Ve Bildirim Alır;yes]
`
}