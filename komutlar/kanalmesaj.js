module.exports = {
  name:"kanal-mesaj",
  code:`
  $title[BAŞARILI!]
  $description[**Bundan sonra <#$mentionedChannels[1]>'a kayıt yaptıktan sonra mesaj atacağım!**]
  $setServerVar[sendkanal;$mentionedChannels[1]]
   $onlyPerms[admin;{description:Bunun İçin Yetkin Yok}{color:RED}]


  
  
  
  `
}
