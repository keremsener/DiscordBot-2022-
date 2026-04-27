module.exports = {
  name:"onay",
  code:`
$useChannel[$getServerVar[onayredlog]]
<@$message[1]>

$footer[Botun Bence İyi Geliştirmeye Devam;$userAvatar[$message]]
$author[Kabul Edildi ve Eklendi;$userAvatar[$authorID]]
$description[<@$message> Botun Kabul Edildi :white_check_mark:

Kontrol Eden Yetkili ; <@$authorID>]
$color[#25C059]
$channelSendMessage[$channelID;Bot Onaylandı Ve Loga Atıldı]
$onlyIf[$getServerVar[tester]!=Ayarlanmadı;Tester Ayarlanmamış]
$onlyIf[$getServerVar[onayredlog]!=Ayarlanmadı;Onay Red Log Ayarlanmamış]
$onlyIf[$getServerVar[botlog]!=Ayarlanmadı;Bot Log Ayarlanmamış]
$onlyIf[$getServerVar[başkanal]!=Ayarlanmadı;Başvuru Kanal Ayarlanmamış]
$onlyIf[$getServerVar[gelenbotlar]!=Ayarlanmadı;Gelen Bot Log Ayarlanmamış]
$onlyIf[$isNumber[$message]!=false;Girdiğin Bir ID Değil]

$onlyIf[$hasRole[$authorID;$getServerVar[tester]]!=false;Üzgünüm Komut Testerlar İçindir !]
 
$onlyIf[$message!=;Bir ID Giriniz]`
}