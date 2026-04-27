module.exports = {
  name:"kayıt-erkek",
  code:`
$giveRole[$mentioned[1];$getServerVar[erkek]]
$onlyIf[$message[2]!=;{description:Kullanım ş!kayıt-erkek @kişi İsim}{title:HATA}{color:RED}]
$channelSendMessage[$getServerVar[sendkanal];<@$mentioned[1]> **aramıza hoşgeldin dostum!**]
 $onlyIf[$getServerVar[kayıt]!=kapalı;{description:Alınacak Rol Ve Verilecek Rol Ayarlanmamış !}{title:HATA}{color:RED}]
  $onlyIf[$hasRoles[$authorID;$getServerVar[kgörevli]]!=false;{description:Üzgünüm Bunu Sadece <@&$getServerVar[kgörevli]> Rolüne Kişileri Kullanabilir !}{title:HATA}{color:RED}]

  `
}

