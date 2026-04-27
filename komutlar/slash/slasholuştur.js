module.exports = {
  name:"soluştur",
  code:`
\`\`\`$message\`\`\` **İsimli Slash Komudu Başarıyla Oluşturuldu !**
"ş!sdüzenle <komut ismi>" İle Guncelleyebilirsiniz
$createSlashCommand[$guildID;$message;Harikasın !]
$onlyForIDs[795630200380850196;Bu Komutu Kullanmaya Yetkin Yok!]
$onlyIf[$message!=;Lütfen İsim Ver !]
  `}