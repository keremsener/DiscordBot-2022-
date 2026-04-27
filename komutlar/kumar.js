module.exports = {
  name:"kumar",
  aliases:['cf'],
  code:`
  $title[$username Kumar Oynadın!]
  $description[Veeee...]
$editIn[5s;$replaceText[$replaceText[$randomText[helal;go];helal; **$username Kazandığın Miktar $multi[$message[1];2];25 **<:sercoin:874323444530020352> ];go; **$username Kaybettiğin Miktar $message[1];50] **<:sercoin:874323444530020352> ]
  $color[BLUE]
  $setGlobalUserVar[para;$replaceText[$replaceText[$randomText[helal;go];helal;$sum[$getGlobalUserVar[para;$authorID];$multi[$message[1];2]];25];go;$sub[$getGlobalUserVar[para;$authorID];$message[1]];50];$authorID]
  $onlyIf[$message[1]<=$getGlobalUserVar[para;$authorID];Paran Yetmiyor !]
  $onlyIf[$isNumber[$message[1]]!=false; Girdiğin Değer Yanlış !]
  $onlyIf[$message[1]>0;0 ve Küçük Değer Giremezsin !]
  $onlyIf[$getGlobalUserVar[hesap;$authorID]!=yok;Hesap Olusturulmadı !] 
$onlyIf[$message[1]<100001;**Max. 100k Kumar Oynayabilirsin!** ]
$cooldown[10s;**10 Saniye Beklemelisin!**]
`
}