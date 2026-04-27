module.exports = {
  name:"tester",
  code:`
  Bot Tester $roleName[$mentionedRoles[1]] Olarak Ayarlanmıştır
  $setServerVar[tester;$mentionedRoles[1]]
  $suppressErrors[Bir Rol Girmedin !]
  $onlyIf[$hasPerms[$authorID;admin]!=false;Bunun İçin Yetkiniz Yok !]
  $onlyIf[$message!=;Üzgünüm Bir Rol Girmelisin !]
  `
}