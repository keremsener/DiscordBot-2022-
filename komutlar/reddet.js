module.exports = {
  name:"reddet",
  code:`
$footer[Botun İyi Değil Ama Üzülme Geliştirebilirsin;$userAvatar[$authorID]]
$author[Maalesef Bidahakine;$userAvatar[$message[1]]]
$useChannel[$getServerVar[onayredlog]]

<@$message[1]> 
$description[
<@$message[1]> Botun Reddedildi x.

$message[2] $message[3] $message[4] $message[5] $message[6] $message[7] $message[8] $message[8] $message[9] $message[10] $message[11] $message[12] $message[13] $message[14] $message[15] $message[16] $message[17] $message[18] $message[19] $message[20] $message[21] $message[22] $message[23] $message[24] $message[25] Sebebiyle Reddedildi.Lütfen Düzeltip Tekrar Başvurun

Reddeden Yetkili ; <@$authorID>]
$color[#831F18]

$channelSendMessage[$channelID;Bot Reddedildi ve Loga Atıldı]
$onlyIf[$getServerVar[tester]!=Ayarlanmadı;Tester Ayarlanmamış]
$onlyIf[$getServerVar[onayredlog]!=Ayarlanmadı;Onay Red Log Ayarlanmamış]
$onlyIf[$getServerVar[botlog]!=Ayarlanmadı;Bot Log Ayarlanmamış]
$onlyIf[$getServerVar[başkanal]!=Ayarlanmadı;Başvuru Kanal Ayarlanmamış]
$onlyIf[$getServerVar[gelenbotlar]!=Ayarlanmadı;Gelen Bot Log Ayarlanmamış]
$onlyIf[$isNumber[$message[1]]!=false;Girdiğin Bir ID Değil]

$onlyIf[$hasRole[$authorID;$getServerVar[tester]]!=false;Üzgünüm Komut Testerlar İçindir !]
 
$onlyIf[$message[2]!=;ID ve sebep giriniz]`
}

