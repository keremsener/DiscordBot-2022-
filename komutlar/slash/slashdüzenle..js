module.exports = {
name: "sdüzenle",
code:`
\`\`\`$message[1]\`\`\` Adındaki Slash Düzeltildi.
Yeni İsmi ; \`\`\`$replaceText[$message[2];yok;İsim Değişmedi;-1]\`\`\`
Yeni Açıklama ; \`\`\`$message[3] $message[4] $message[5]\`\`\`
$modifySlashCommand[$guildID;$getSlashCommandID[$message[1]];$replaceText[$message[2];yok;$message[1];-1];$message[3] $message[4] $message[5]]
$suppressErrors[Böyle Bir Slash Bulamadım !]
$onlyForIDs[$ownerID; Bu Güzel Komut Sunucu Sahibine Özel]
$onlyIf[$message!=;ş!sdüzenle <slash ismi> <yeni ismi/yok> <açıklaması>]
`}

