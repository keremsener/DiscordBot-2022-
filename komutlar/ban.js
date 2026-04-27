module.exports = {
name:"ban",
aliases:["yasakla"],
code:`
$onlyIf[$mentioned[1]!=;Birini Etiketle!]
$ban[$mentioned[1];$noMentionMessage;0]
$description[
$username, \`$userTag[$mentioned[1]]\`  Kişisi \`$noMentionMessage\` Sebebiyle Sunucudan Yasaklandı!]
$color[RED]
$sendDM[$mentioned[1];Merhaba <@$mentioned[1]>, \`$serverName[$guildID]\` Sunucusundan \`$noMentionMessage\` Sebebiyle Sunucudan Yasaklandınız!]
$onlyIf[$hasPerms[$authorID;ban]!=false;Bu Komutu Kullanmak İçin \`Üyeleri Yasakla\` Yetkisine Sahip Olman Gerekiyor!]
$onlyIf[$hasPerms[$mentioned[1];admin]!=true;Yönetici veya Moderatör Olan Birini Yasaklayamazsın!]
`
}