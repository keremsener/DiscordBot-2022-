module.exports = {
  name:"başvurukanal",
  code:`
  Başvuruların Yapılacağı Kanal Artık $channelName[$mentionedChannels[1]] Olarak Belirlenmiştir.
  $setServerVar[başkanal;$mentionedChannels[1]]
  $suppressErrors[Bir Kanal Girmedin !]
  $onlyIf[$hasPerms[$authorID;admin]!=false;Bunun İçin Yetkiniz Yok !]
  $onlyIf[$message!=;Üzgünüm Bir Kanal Girmelisin !]
  `
}