module.exports = {
  name: "otorol",
  code: `
$setServerVar[otorol;$mentionedRoles[1]]
  $setServerVar[otorollog;$mentionedChannels[1]]
  Otorol Kanalı $channelName[$mentionedChannels[1]] Olarak
  Otorol Rolü İse $roleName[$mentionedRoles[1]] Olarak Ayarlanmıştır.
  $onlyPerms[admin;**Malesef bunun için yetkin yok.**]
  $onlyIf[$message[2]!=;Kullanım ş!otorol @rol @log]
   `
}