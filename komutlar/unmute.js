module.exports = {
name:"unmute",
code:`
$onlyIf[$hasPerms[$authorid;manageroles]!=false;Bu Komutu Kullanmak İçin \`Rolleri Yönet\` Yetkisine Sahip Olman Gerekiyor!]
$onlyIf[$getServerVar[mutelirol]!=yok;Muteli Rol Ayarlanmamış!]
$onlyIf[$hasRole[$mentioned[1];$getServerVar[mutelirol]]!=false;$username, <@$mentioned[1]> Kişisinin Mutesi Açıldı!]
$onlyIf[$mentioned[1]!=;Birini Etiketle!]
$description[
$username, <@$mentioned[1]> Kişisinin Mutesi Açıldı!]
$color[RANDOM]
$takeRole[$mentioned[1];$getServerVar[mutelirol]]
`
}