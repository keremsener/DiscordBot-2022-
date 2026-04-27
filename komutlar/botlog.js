module.exports = {
  name:"botlog",
  code:`
  Gelen Botların Log Kanalı $channelName[$mentionedChannels[1]] Olarak Belirlenmiştir.
  $setServerVar[botlog;$mentionedChannels[1]]
  $suppressErrors[Bir Kanal Girmedin !]
  $onlyIf[$hasPerms[$authorID;admin]!=false;Bunun İçin Yetkiniz Yok !]
  $onlyIf[$message!=;Üzgünüm Bir Kanal Girmelisin !]
  `
}