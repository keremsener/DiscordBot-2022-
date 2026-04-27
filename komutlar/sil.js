module.exports = {
  name: "sil",
  code: `
  \`\`$message\`\` Kadar Mesaj Artık Güneşte 🌞
  $deletecommand
  $deleteIn[4s]
  $clear[$message[1]]
  $suppressErrors[Hata !]
  $onlyIf[$hasPerms[$authorID;managemessages]!=false;Üzgünüm Bu Komut İçin \`\`Mesajları Yönet\`\` Yetkin Bulunmalıdır]
  $onlyIf[$message!=;Mesaj Miktarı Girer Misin !]
  $onlyIf[$isNumber[$message[1]]!=false;Girdiğin Miktar Rakam Değil !]
  $onlyIf[$message[1]>0;Girdiğin Rakam 1'in Altında Olamaz !]
  $onlyIf[$message[1]<501;Girdiğin Rakam 500'ün Üstünde Olamaz !]  
`
};
