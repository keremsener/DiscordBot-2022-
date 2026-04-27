module.exports = {
  name:"bb-kanal",
  code:`
  Resimli Baybay Kanali \`\`\`$channelName[$mentionedChannels[1]]\`\`\` Olarak Ayarlandı
  $setServerVar[bbkanal;$mentionedChannels[1]]
  $onlyPerms[admin;Yetkiniz Yetmiyor]
  $onlyIf[$mentionedChannels[1]!=;Kanal Etiketlemeyi Unuttun]
`}
 