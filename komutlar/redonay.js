module.exports = {
  name:"redonay",
  code:`
  Red ve Onay Log Kanalı $channelName[$mentionedChannels[1]] Olarak Belirlenmiştir.
  $setServerVar[onayredlog;$mentionedChannels[1]]
  $suppressErrors[Bir Kanal Girmedin !]
  $onlyIf[$hasPerms[$authorID;admin]!=false;Bunun İçin Yetkiniz Yok !]
  $onlyIf[$message!=;Üzgünüm Bir Kanal Girmelisin !]
  `
}