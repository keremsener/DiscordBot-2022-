module.exports = {
  name:"günlük",
  aliases:['daily'],
  code:`
$title[BAŞARILI!]
$description[Bugün $random[170;1000] Cash kazandın!
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$authorID];$random[170;1000]];$authorID]
$globalCooldown[1d; Bugün Günlük Paranı Aldın!]
$color[BLUE]
$onlyIf[$getGlobalUserVar[hesap;$authorID]!=yok;Hesap Olusturulmadı !]

  ` 
}