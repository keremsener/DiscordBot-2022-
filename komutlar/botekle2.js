module.exports = {
  name:"bot-ekle",
  code:`
  $useChannel[$getServerVar[gelenbotlar]]
  $color[BLUE]
  <@&$getServerVar[tester]>
  $description[
Bot İsmi = \`\`$username[$message[1]]#$discriminator[$message[1]]\`\` 
Bot Prefixi = \`\`$message[2]\`\`

[0 Perm Davet Linki\\](https://discord.com/oauth2/authorize?client_id=$message[1]&scope=bot&permissions=0) [8 Perm Davet Linki\\](https://discord.com/oauth2/authorize?client_id=$message[1]&scope=bot&permissions=8)
]
$footer[$username#$discriminator Başvurdu !;$authorAvatar]

$onlyForChannels[$getServerVar[başkanal];]

$onlyIf[$getServerVar[tester]!=Ayarlanmadı;]
$onlyIf[$getServerVar[onayredlog]!=Ayarlanmadı;]
$onlyIf[$getServerVar[botlog]!=Ayarlanmadı;]
$onlyIf[$getServerVar[başkanal]!=Ayarlanmadı;]
$onlyIf[$getServerVar[gelenbotlar]!=Ayarlanmadı;]

$onlyIf[$isBot[$message[1]]!=false;]
$onlyIf[$isNumber[$message[1]]!=false;]
$onlyIf[$message[2]!=;]
`
}