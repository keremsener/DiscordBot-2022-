module.exports = {
  name:"itiraf-kanalayarla",
  aliases:["ikanal-ayarla","ikanalayarla","itirafkanalayarla"],
  code:`
  $title[KANAL AYARLANDI!]
  $description[**İtirafları $channelName[$mentionedChannels[1]] Kanalında Paylaşacağım!**]
  $color[GREEN]
  $setServerVar[ikanal;$mentionedChannels[1]]
  $onlyPerms[admin;{description:Bunun İçin Yetkin Yok}{color:RED}]

  
  
  
  
  
  `
}