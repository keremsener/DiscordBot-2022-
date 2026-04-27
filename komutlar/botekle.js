module.exports = {
  name:"bot-ekle",
  code:`
  $deletecommand
$useChannel[$getServerVar[botlog]]
<@$authorID>
$color[BlUE]
$description[$thumbnail[$userAvatar[$message[1]]]
Bot İsmi = \`\`$username[$message[1]]#$discriminator[$message[1]]\`\` 
Bot Prefixi = \`\`$message[2]\`\`

Başvuran Kişi = \`\`$username#$discriminator\`\`]


$footer[$username#$discriminator Başvurdu !;$authorAvatar]
$setUserVar[sahibi;$authorID;$message[1]]
$onlyForChannels[$getServerVar[başkanal];Üzgünüm Bu Komudu Sadece <#$getServerVar[başkanal]> Kanalında Kullanabilirsiniz.]

$onlyIf[$getServerVar[tester]!=Ayarlanmadı;Tester Ayarlanmamış]
$onlyIf[$getServerVar[onayredlog]!=Ayarlanmadı;Onay Red Log Ayarlanmamış]
$onlyIf[$getServerVar[botlog]!=Ayarlanmadı;Bot Log Ayarlanmamış]
$onlyIf[$getServerVar[başkanal]!=Ayarlanmadı;Başvuru Kanal Ayarlanmamış]
$onlyIf[$getServerVar[gelenbotlar]!=Ayarlanmadı;Gelen Bot Log Ayarlanmamış]

$onlyIf[$isBot[$message[1]]!=false;Girdiğin ID Bir Bota Ait Değil !]
$onlyIf[$isNumber[$message[1]]!=false;ID Girmedin !]
$onlyIf[$message[2]!=;Kullanım ş!botekle <Bot ID> <prefixiniz>]
`
}