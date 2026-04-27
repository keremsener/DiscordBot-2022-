module.exports = {
  name:"gelenbot",
  code:`
  Gelen Botların Yetkili Kanalı $channelName[$mentionedChannels[1]] Olarak Belirlenmiştir.
  $setServerVar[gelenbotlar;$mentionedChannels[1]]
  $suppressErrors[Bir Kanal Girmedin !]
  $onlyIf[$hasPerms[$authorID;admin]!=false;Bunun İçin Yetkiniz Yok !]
  $onlyIf[$message!=;Üzgünüm Bir Kanal Girmelisin !]
  `
}