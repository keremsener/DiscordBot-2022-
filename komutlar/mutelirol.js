module.exports = {
name:"muteli-rol",
aliases:["muted-rol"],
code:`
$onlyIf[$mentionedRoles[1]!=;Bir Rol Etiketle!]
$setServerVar[mutelirol;$mentionedRoles[1]]
$description[
$username Muteli Rolü Ayarlandı!]
$color[RED]
$onlyIf[$hasPerms[$authorid;admin]!=false;Bu Komutu Kullanmak İçin \`Yönetici\` Yetkisine Sahip Olman Gerekiyor!]

`
}