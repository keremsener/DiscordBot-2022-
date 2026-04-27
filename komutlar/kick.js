module.exports = {
  name:"kick",
  code:`
  $kick[$mentioned[1];$noMentionMessage]
$username[$mentioned[1]]#$discriminator[$mentioned[1]] Kişisi Sunucudan $noMentionMessage Sebebi İle atılmıştır.
$onlyIf[$hasPerms[$authorID;ban]!=false;Üzgünüm Yetkin Yetmiyor !]`
}