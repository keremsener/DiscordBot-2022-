module.exports = {
  name: "otorol-kapat",
  code: `

  $onlyPerms[admin;Bunun İçin Yetkin Yok]
$resetServerVar[otorol]
  $resetServerVar[otorollog]
$title[BAŞARILI!]
$description[Başarıyla Oto Rol Sistemini Kapattım.]
$footer[Oto Rolü Kapatan $username ;$authorAvatar`
}